// Define an asynchronous function named fetchUserData
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Display a loading message
        dataContainer.innerHTML = 'Loading user data...';

        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Handle HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to display the user list
        const userList = document.createElement('ul');

        // Loop through the user data and append names to the list
        users.forEach((user) => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear the existing content and display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Add a DOMContentLoaded event listener to invoke fetchUserData
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});