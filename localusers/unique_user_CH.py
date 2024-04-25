import time
from selenium import webdriver
from selenium.webdriver.common.by import By
import collections
import csv

def findKeyword(driver, keyword):
    
    if keyword.lower() in driver.page_source.lower():
        return True
    
    else:
        return False

def countElements(driver, tag_name)->int:

    count = 0

    for tags in tag_name:
        count += len(driver.find_elements(By.TAG_NAME, tags))

    return count

def userAction(action, driver, reward_time, req_list)->float:
    
    total_reward_time = 0
    
    if action.upper() == "KEYWORD":

        for keyword in req_list:

            if findKeyword(driver, keyword):
                print("found", keyword)
                time.sleep(reward_time)
                total_reward_time += reward_time

            else:
                print("not found")
    
    elif action.upper() == "IMAGE":
        
        num_images = countElements(driver, req_list)
        total_reward_time = reward_time * num_images
        time.sleep(total_reward_time)

    elif action.upper() == "LINK":

        num_links = countElements(driver, req_list)
        total_reward_time = reward_time * num_links
        clickLink(driver)
        time.sleep(total_reward_time)

    elif action.upper() == "BUTTON":
        
        for button_name in req_list:
            num_buttons = countElements(driver, button_name)
            total_reward_time = reward_time * num_buttons
            clickButton(driver, button_name)
            time.sleep(total_reward_time)

    return total_reward_time

def clickLink(driver):
    
    links = driver.find_elements(By.TAG_NAME, "a")

    for link in links:
        link.click()

def clickButton(driver, button_name):
    
    buttons = driver.find_elements(By.ID, button_name)

    for button in buttons:
        button.click()

def main():
    
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000/")
    #driver.get("file:///Users/cameronhunter/Documents/GitHub/CSE-4500-Platform-Computing/project4/test.html")
    
    reward_time = 1

    keywords = ["Magic", "bass", "Music"]
    tags = ["img"]
    links = ["a"]
    buttons = ["tab1", "tab2", "tab3", "tab4"]

    total_reward_time = userAction("KEYWORD", driver, reward_time, keywords)
    total_reward_time += userAction("BUTTON", driver, reward_time, buttons)
    total_reward_time += userAction("IMAGE", driver, reward_time, tags)
    total_reward_time += userAction("LINK", driver, reward_time, links)

    driver.quit()
    print("Presence Time: ", total_reward_time, "seconds")

if __name__ == "__main__":
    main()