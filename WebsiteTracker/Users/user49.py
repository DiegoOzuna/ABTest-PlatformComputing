import time
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By

def findKeyword(driver, keyword)->bool:
    return keyword in driver.page_source

def userAction(driver):
    reward_time = 10
    total_reward_time = 0
    try:
        clickable = driver.find_element(By.ID, "click")
        ActionChains(driver)\
            .click(clickable)\
            .perform()
        total_reward_time += reward_time
    except Exception as e:
        print("The clickable with id 'click' was not found.")
        time.sleep(total_reward_time)
    else:
        print("Presence Time: ", total_reward_time)
        time.sleep(total_reward_time)

if __name__ == "__main__":
    main()
