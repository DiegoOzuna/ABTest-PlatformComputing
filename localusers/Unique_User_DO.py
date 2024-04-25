# A small description of what this will try to accomplish


#NOTE: there are commented out functions that introduce variability to this user. For the purpose of our baseline, they have been replaced by simpler functions.


from selenium import webdriver
from selenium.webdriver.common.by import By

#allows selenium to use a chain of actions (will be used to open links in another tab)
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

#Removes stop-words in the website and allows for a better choice in keywords chosen randomly
import nltk
from nltk.corpus import stopwords

#allows for a weight to be assigned to words within website
from sklearn.feature_extraction.text import TfidfVectorizer

#allows for easier parsing through html source
from bs4 import BeautifulSoup
#allows for word tokens to be identified from parsed html source.
import re

#used to make our unique user completely random (therefore variable)
import random

#used to keep track of presence time of the unique_user
import time

#################################################
# Rewards via keyword or image or link based on action
# action: KEYOWRD, IMAGE, LINK
# driver: web driver
# req_list: list of either keyword or element tag
##################################################

def userAction(action, driver, reward_time, req_list)->float:
    total_reward_time = 0
    if action.upper() == "KEYWORD":
        if(req_list):
            for keyword in req_list:
                print("found", keyword)
                num_words = findKeyword(driver, keyword)
                print("appeared", num_words, "times")
                reward_time_X = reward_time * num_words
                time.sleep(reward_time_X)
                total_reward_time += reward_time_X
        else:
            print("Program decided to not choose any word for keyword (this is not a bug)...")
    elif action.upper() == "IMAGE":
        item = countElem(driver, req_list)
        num_images = item[0]
        reward_time_X = reward_time*num_images
        total_reward_time = reward_time_X
        print("# of Images: ", num_images)
        time.sleep(reward_time_X)
    elif action.upper() == "LINK":
        item = countElem(driver, req_list)
        num_links = item[0]
        
        clickLinks(driver, item[1])

        reward_time_X = reward_time*num_links
        total_reward_time = reward_time_X
        print("# of Links: ", num_links)
        time.sleep(reward_time_X)
    
    return total_reward_time


def findKeyword(driver, keyword):
    # Get the page source HTML
    page_source = driver.page_source

    # Parse the HTML using BeautifulSoup
    soup = BeautifulSoup(page_source, 'html.parser')

    # Find all visible text elements on the page
    visible_text = [element.text.lower() for element in soup.find_all(lambda tag: tag.name in ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'])]

    # Create a regular expression pattern to match whole words
    pattern = r'\b{}\b'.format(re.escape(keyword.lower()))

    # Count the keyword in visible text
    num_occurrences = sum(len(re.findall(pattern, text)) for text in visible_text)

    return num_occurrences


#def countElem(driver, tag_name):
    # Get count of elements for the specified tag_name
    #elements = driver.find_elements(By.TAG_NAME, tag_name)
    
    # Total number of elements
    #total_length = len(elements)

    # Randomly select how many elements you are interested in
    #num_elements_of_interest = random.randint(1, total_length)  # Randomly select a number from 1 to total_length
    
    # Randomly select a subset of elements
    #elements_of_interest = random.sample(elements, num_elements_of_interest)

    #return num_elements_of_interest, elements_of_interest

def countElem(driver, tag_name):
    # Get all elements for the specified tag_name
    elements = driver.find_elements(By.TAG_NAME, tag_name)
    
    # Total number of elements
    total_length = len(elements)

    return total_length, elements

def clickLinks(driver, links):
    #find link or links and click on them....
    for link in links:
        ActionChains(driver) \
            .key_down(Keys.SHIFT) \
            .click(link) \
            .key_up(Keys.SHIFT) \
            .perform()
        


def skimParagraphs(driver):
    # Find all paragraphs
    paragraphs = driver.find_elements(By.TAG_NAME, "p")
    # Extract the text of each paragraph
    p_contents = [paragraph.text.lower() for paragraph in paragraphs]

    # Filter out stop words using NLTK
    stop_words = set(stopwords.words('english'))

    filtered_contents = []
    for content in p_contents:
        words = content.split()
        filtered_words = [word for word in words if word not in stop_words]
        filtered_contents.append(' '.join(filtered_words))

    # Create a TfidfVectorizer object
    vectorizer = TfidfVectorizer()

    # Apply tf-idf to the paragraphs
    tfidf_matrix = vectorizer.fit_transform(filtered_contents)

    # Get the words
    words = vectorizer.get_feature_names_out()

    # Get the frequency of each word
    word_frequencies = tfidf_matrix.sum(axis=0).A1

    # Create a dictionary of words and their frequencies
    word_frequency_dict = dict(zip(words, word_frequencies))

    # Sort the dictionary by value (frequency) in ascending order
    sorted_word_frequency_dict = dict(sorted(word_frequency_dict.items(), key=lambda item: item[1]))

    print(sorted_word_frequency_dict)
    return sorted_word_frequency_dict


#def keywordSelect(dictionary):
    # Convert the dictionary to a list of tuples
    #items = list(dictionary.items())

    # Determine the number of keywords to select
    #num_keywords = random.randint(0, 2)    

    #idea is to allow for variablility so, 0 would represent if user was extremely uninterested
    #and we allow up to two random selections from a list consisting of words that are above the reader interest
    #level which if high, has a possible chance of selecting a word that appears more than others. However, if low,
    #then the chances of selecting a word that appears rarely becomes possible which again, is part of the variablility
    #in having an interested/uninterested user

    #if(num_keywords != 0):

        # Determine the discrimination factor
        #discrimination_factor = random.uniform(0, max(dictionary.values()))

        #print()
        #print("Level of Reader Interest Factor: ", discrimination_factor)
        #print("Going to remove words lower than this factor")
        #print("This is how many keywords I will care about: ", num_keywords)

        #print()

        # Filter the items based on the discrimination factor
        #filtered_items = [item for item in items if item[1] >= discrimination_factor]

        # If the discrimination factor is too high and no items are left, use last item
        #if not filtered_items:
            #filtered_items = items


        #print("This is the list dictionary after removal")
        #print(filtered_items)

        # Randomly select keywords
        #selected_keywords = random.sample(filtered_items, min(num_keywords, len(filtered_items)))

        # Return the selected keywords
        #return [keyword for keyword, frequency in selected_keywords]
    #return []

def selectTopTwoKeyword(dictionary):
    # Convert the dictionary to a list of tuples
    frequencies = list(dictionary.items())

    # Sort the list in descending order based on the frequency
    sorted_frequencies = sorted(frequencies, key=lambda x: x[1], reverse=True)

    # Get the words from the first two tuples
    word1 = sorted_frequencies[0][0] if len(sorted_frequencies) > 0 else None
    word2 = sorted_frequencies[1][0] if len(sorted_frequencies) > 1 else None

    return word1, word2



def main():
    #initialize browser
    driver = webdriver.Chrome()

    #Navigate to your website
    driver.get("http://localhost:3000")

    tfidfDictionary = skimParagraphs(driver)
    reward_time = 10
    total_reward_time = userAction("KEYWORD", driver, reward_time, selectTopTwoKeyword(tfidfDictionary))
    total_reward_time += userAction("IMAGE", driver, reward_time, "img")
    total_reward_time += userAction("LINK", driver, reward_time, "a")
    

    
    driver.quit()
    print("Presence Time:", total_reward_time)

if __name__ == "__main__":
    main()
