import time
import json

import importlib #will be used to dynamically use user scripts located in Users

from selenium import webdriver
from selenium.webdriver.common.by import By

# Initialize browser
driver = webdriver.Chrome()

# Navigate to your website 
driver.get("http://localhost:3000/")

metrics = []
num_clicks = 0


for x in range(28, 62):
    #ONCE THE USER POOL IS FINALIZED WE REMOVE THIS IF STATEMENT.
    #For now we only run for user6 to debug this metric tracker file.
    if x != 5 and x != 13 and x != 19 and x != 28 and x != 38 and x != 49 and x != 50:
        print("STARTING USER ", {x})
        module_name = f"Users.user{x}"
        user_module = importlib.import_module(module_name)


        # Track presence time 
        start_time = time.time()       #start time
        user_module.userAction(driver) #let user act  NOTE: SOME USERS CLOSE THE CONNECTION 
        final_time = time.time()       #end time

        driver.get("http://localhost:3000/") #a fail-safe to make sure everyone has the same link.

        print("User stayed on website for ",final_time-start_time, "seconds")



driver.quit()
