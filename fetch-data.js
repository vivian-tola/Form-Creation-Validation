// Initialize the async function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    // Select the data container element
    const dataContainer = document.getElementById('api-data');
  
    // Display a loading message
    dataContainer.textContent = 'Loading user data...';
  
    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
      
      // Check if the response is OK (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Convert the response to JSON
      const users = await response.json();
  
      // Clear the loading message
      dataContainer.innerHTML = '';
  
      // Create and append the user list
      const userList = document.createElement('ul');
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
      dataContainer.appendChild(userList);
    } catch (error) {
      // Handle errors
      dataContainer.innerHTML = '';
      dataContainer.textContent = 'Failed to load user data.';
      console.error('Error fetching user data:', error);
    }
  }
  
  // Invoke fetchUserData on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', fetchUserData);