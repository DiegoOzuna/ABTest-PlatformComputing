import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Fetch the service account key JSON file contents
cred = credentials.Certificate("./credentials.json")

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://ab-test-37c5e-default-rtdb.firebaseio.com/'
})

# As an admin, the app has access to read and write all data, regardless of Security Rules
ref = db.reference('iteration 3')

# Define the groups
groups = ["control", "test"]

# Loop through both control and test groups
for group_name in groups:
    group_ref = ref.child(group_name)  # Get the reference to the group
    group_data = group_ref.get()  # Get the data for the group

    # Calculate the average presence time
    total_time = sum(user_data["presence_time"] for user_data in group_data.values())
    average_time = total_time / len(group_data)

    print(f"The average presence time for the {group_name} group is {average_time} seconds.")
