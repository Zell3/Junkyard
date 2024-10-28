import requests
import subprocess
import os
import glob
import time
import sys  

server_process = None

# URL to test
url = 'http://localhost:3000/'

def test_server():
    try:
        response = requests.get(url)
        if response.status_code == 200 and 'Web Engineering and Comtemporary - Midterm Exam' in response.text:
            print("✔ Server ทำงานได้")
            return True
        else:
            print("❌ Failed response is not as expected.")
            return False
    except requests.ConnectionError:
        return False


def start_server(folder):
    global server_process  
    print("✔ Starting server...")

    # Close the old process if running
    if server_process:
        server_process.terminate()
        server_process.wait()
        print("Old server process terminated.")

    # Start the server
    command = f'cd {folder} && npm install && npm run dev'
    server_process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    time.sleep(2) 

pattern = '*_mid-exam'
matching_folders = glob.glob(pattern)

if matching_folders:

    for folder in matching_folders:

        if os.path.isdir(folder):
            random_text = folder.split('_mid-exam')[0]
            print(f"Found folder: {folder}")
            print(f"✔ ต้องเป็นรหัสนิสิต: {random_text}")
            
            if not test_server():
                start_server(folder)
                if not test_server():
                    print("❌ Failed to start the server.")
                    sys.exit()


BASE_URL = 'http://localhost:3000'

def test_get_prefixes():
    response = requests.get(f'{BASE_URL}/prefixes')
    assert response.status_code == 200, "Expected status code 200"
    assert 'data' in response.json(), "Expected 'data' key in response"

def test_get_prefix_by_id(valid_id):
    response = requests.get(f'{BASE_URL}/prefix/{valid_id}')
    assert response.status_code == 200, "Expected status code 200 for valid ID"
    assert 'data' in response.json(), "Expected 'data' key in response for valid ID"


def test_post_prefix(valid_name):
    response = requests.post(f'{BASE_URL}/prefix', json={'name': valid_name})
    assert response.status_code == 200, "Expected status code 200 for valid name"
    assert 'data' in response.json(), "Expected 'data' key in response for valid name"


def test_put_prefix(valid_id, valid_name):
    response = requests.put(f'{BASE_URL}/prefix', json={'id': valid_id, 'name': valid_name})
    assert response.status_code == 200, "Expected status code 200 for valid ID and name"
    assert 'data' in response.json(), "Expected 'data' key in response for valid update"


def test_delete_prefix(valid_id):
    response = requests.delete(f'{BASE_URL}/prefix', json={'id': valid_id})
    assert response.status_code == 200, "Expected status code 200 for valid delete"
    assert 'data' in response.json(), "Expected 'data' key in response for valid delete"


def test_get_users():
    response = requests.get(f'{BASE_URL}/users')
    assert response.status_code == 200, "Expected status code 200"
    assert 'data' in response.json(), "Expected 'data' key in response"

def test_get_user_by_id(valid_id):
    response = requests.get(f'{BASE_URL}/user/{valid_id}')
    assert response.status_code == 200, "Expected status code 200 for valid ID"
    assert 'data' in response.json(), "Expected 'data' key in response for valid ID"


def test_post_user(valid_user_data):
    response = requests.post(f'{BASE_URL}/user', json=valid_user_data)
    assert response.status_code == 200, "Expected status code 200 for valid user data"
    assert 'data' in response.json(), "Expected 'data' key in response for valid user data"


if __name__ == "__main__":
    
    print("  Testing /prefixes endpoint...")
    test_get_prefixes()
    print("✔ Passed!")

    print("  Testing /prefix/:id endpoint...")
    test_get_prefix_by_id(valid_id=1)
    print("✔ Passed!")

    print("  Testing POST /prefix endpoint...")
    test_post_prefix(valid_name="Mr.")
    print("✔ Passed!")

    print("  Testing PUT /prefix endpoint...")
    test_put_prefix(valid_id=1, valid_name="Dr.")
    print("✔ Passed!")

    print("  Testing DELETE /prefix endpoint...")
    test_delete_prefix(valid_id=2)
    print("✔ Passed!")

    print("  Testing /users endpoint...")
    test_get_users()
    print("✔ Passed!")

    print("  Testing /user/:id endpoint...")
    test_get_user_by_id(valid_id=1)
    print("✔ Passed!")

    print("  Testing POST /user endpoint...")
    test_post_user(valid_user_data={
        "username": "johndoe",
        "first_name": "John",
        "last_name": "Doe",
        "email": "john@example.com",
        "pfn_id": 1
    })
    print("✔ Passed!")

    print("All tests completed successfully!")
    sys.exit()