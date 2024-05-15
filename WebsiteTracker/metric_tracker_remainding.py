import time
import json
import random
import importlib  # will be used to dynamically use user scripts located in Users

# This is will for database storage.
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

from selenium import webdriver
from selenium.webdriver.common.by import By


# Fetch the service account key JSON file contents
cred = credentials.Certificate("./credentials.json")

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://ab-test-37c5e-default-rtdb.firebaseio.com/'
})

# As an admin, the app has access to read and write all data, regardless of Security Rules
ref = db.reference('iteration 3')


random.seed(42)  # Set a fixed seed for the random number generator

exclude_numbers = {5, 13, 19, 28, 38}  # Numbers to be excluded
numbers = [x for x in range(1, 62) if x not in exclude_numbers]  # Create a list of numbers from 1 to 61 excluding the numbers above

random.shuffle(numbers)  # Shuffle the list to ensure randomness

control_group = numbers[:20]  # Get the first 20 numbers for control group
test_group = numbers[20:40]  # Get the next 20 numbers for test group

unused_group = numbers[40:] #Get the remaining numbers for unused group

# Loop through the unused group
for x in unused_group:
    print("STARTING USER ", {x})
    module_name = f"Users.user{x}"  # module_name will also be our ID for database entries.
    user_module = importlib.import_module(module_name)

    # Initialize browser for each user
    driver = webdriver.Chrome()

    # Navigate to your website 
    driver.get("http://localhost:3000/")

    time.sleep(10) #buffer time so that page is fully reloaded.

    # Track presence time 
    start_time = time.time()  # start time
    user_module.userAction(driver)  # let user act  NOTE: SOME USERS CLOSE THE CONNECTION 
    final_time = time.time()  # end time

    presenceTime = final_time - start_time

    print("User stayed on website for ", presenceTime, "seconds")

    # Save this to Firebase
    users_ref = ref.child(f"unused/{x}")  # Add the user ID to the reference
    users_ref.set({
        "presence_time": presenceTime
    })

driver.quit()
