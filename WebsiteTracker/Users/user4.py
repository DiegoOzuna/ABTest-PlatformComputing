import time
import csv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import re

def countElem(driver, tag_name)->int:
    # find_element returns only 1 value while find_elements returns a list of all the values
    return len(driver.find_elements(By.TAG_NAME, tag_name))

def findKeyword(driver, keyword)->bool:
    # print(driver.page_souce.lower())
    return keyword.lower() in driver.page_source.lower()

def wordCount(driver):
    paragraphs = driver.find_elements(By.TAG_NAME, "p")
    word_count = 0
    for paragraph in paragraphs:
        word_count += len(re.findall(r'\w+', paragraph.get_attribute('innerHTML')))
    return word_count

def clickLink(driver):
    links = driver.find_elements(By.TAG_NAME, "a")
    clickCount = 0
    for i in range(len(links)):
        try:
            # Open the link in a new tab by sending 'CTRL + CLICK' command
            ActionChains(driver).key_down(Keys.CONTROL).click(links[i]).key_up(Keys.CONTROL).perform()
            clickCount += 1
            time.sleep(3)
        except StaleElementReferenceException:
            print("StaleElementReferenceException encountered. Refreshing links and retrying...")
            links = driver.find_elements(By.TAG_NAME, "a")
            ActionChains(driver).key_down(Keys.CONTROL).click(links[i]).key_up(Keys.CONTROL).perform()
            clickCount += 1
            time.sleep(3)
    return clickCount

def useAction(action, driver, reward_time, req_list)->float:
    total_reward_time = 0
    if action.upper() == "KEYWORD":
        for keyword in req_list:
            if findKeyword(driver, keyword):
                print("Found: ", keyword)
                total_reward_time += reward_time
                time.sleep(reward_time)
            else:
                print("Not found: ", keyword)
    elif action.upper() == "IMAGES":
        for tag in req_list:
            num_images = countElem(driver, tag)
            total_reward_time += reward_time * num_images
            time.sleep(total_reward_time)
    elif action.upper() == "READER":
        num_word = wordCount(driver)
        total_reward_time += reward_time * num_word
        time.sleep(total_reward_time)
    elif action.upper() == "LINK":
        num_link = clickLink(driver)
        total_reward_time += reward_time * num_link
    return total_reward_time



def userAction(driver):
    reward_time = 10
    reward_per_word = 1
    reward_per_link = 3

    keywords = ["student", "mochi"]
    tags = ["img"]

    total_reward_time = useAction("KEYWORD", driver, reward_time, keywords)
    total_reward_time += useAction("IMAGES", driver, reward_time, tags)
    total_reward_time += useAction("READER", driver, reward_per_word, "")
    total_reward_time += useAction("LINK", driver, reward_per_link, "")

    # For debugging
    print("Presence Time:", total_reward_time, " seconds.")

