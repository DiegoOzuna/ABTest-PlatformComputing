from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def findText(driver, keyword):
    if keyword.lower() in driver.page_source.lower():
        return True
    else:
        return False
    
def findKeyword(driver, keyword) -> bool:
    return keyword.lower() in driver.page_source.lower()

def countTagElem(driver, tag_name) -> int:
    print("Tag name:", tag_name)  # Print tag name for debugging
    count = 0
    count += len(driver.find_elements(By.TAG_NAME, tag_name))
    return count

def checkLink(driver, reward_time) -> float:
    total_reward_time = 0
    links = driver.find_elements(By.TAG_NAME, "a")
    num_links = len(links)

    for i in range(num_links):
        try:
            # Find the links on each iteration
            links = driver.find_elements(By.TAG_NAME, "a")
            driver.execute_script("window.open('" + links[i].get_attribute('href') + "');")
            print("Link found and opened in a new tab")
            total_reward_time += reward_time
            time.sleep(reward_time)
        except Exception as e:
            print(f"Failed to open the link in a new tab due to: {str(e)}")

    return total_reward_time


def userAction(driver):
    reward_time = 10
    total_reward_time = 0

    # Check for keywords
    total_reward_time += _user_action("KEYWORD", driver, reward_time, [])

    # Check for images
    total_reward_time += _user_action("IMAGE", driver, reward_time, "img")  # Pass tag name directly

    # Check for links
    total_reward_time += _user_action("LINK", driver, reward_time, [])

    print("Presence Time:", total_reward_time)

def _user_action(action, driver, reward_time, req_list) -> float:
    total_reward_time = 0

    if action.upper() == "KEYWORD":
        for keyword in req_list:
            if findText(driver, keyword):
                print("Keyword found:", keyword)
                time.sleep(reward_time)
                total_reward_time += reward_time
            else:
                print("Keyword not found:", keyword)

    elif action.upper() == "IMAGE":
        num_images = countTagElem(driver, req_list)  # Pass tag name directly
        print("Number of images found:", num_images)
        total_reward_time = reward_time * num_images
        time.sleep(total_reward_time)

    elif action.upper() == "LINK":
        total_reward_time += checkLink(driver, reward_time)

    return total_reward_time

def main(url):
    # Initialize browser
    driver = webdriver.Chrome()

    # Navigate to the website 
    driver.get(url)

    # Call user action
    userAction(driver)

    driver.quit()

if __name__ == "__main__":
    # Run against a website with links
    main("http://localhost:3000/")
