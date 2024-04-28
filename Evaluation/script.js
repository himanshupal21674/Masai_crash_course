let apiBaseUrl = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees';

// Constants for pagination
let itemsPerPage = 10; // 10 items per page
let currentPage = 1; // Initial page
let totalPages = 1; // Total number of pages, to be calculated after fetching data

// Function to fetch employee data from the API with the provided query parameters
async function fetchEmployeeData() {
    try {
        // Build the query parameters for the API request
        let department = document.getElementById('departmentFilter').value;
        let gender = document.getElementById('genderFilter').value;
        let salarySort = document.getElementById('salarySort').value;

        let queryParams = `page=${currentPage}&limit=${itemsPerPage}`;

        // Add filter by department 
        if (department) {
            queryParams += `&filterBy=department&filterValue=${department}`;
        }

        // Add filter by gender 
        if (gender) {
            queryParams += `&filterBy=gender&filterValue=${gender}`;
        }

        // Add sorting by salary 
        if (salarySort) {
            queryParams += `&sort=salary&order=${salarySort}`;
        }

        // Fetch data from the API
        let response = await fetch(`${apiBaseUrl}?${queryParams}`);
        if (!response.ok) {
            throw new Error('Failed to fetch employee data');
        }

        // Get the data from the response
        let data = await response.json();
        
        // Determine total number of pages based on the fetched data and items per page
        totalPages = Math.ceil(data.count / itemsPerPage);

        // Display the fetched data in the table
        displayEmployees(data.data);
        
        // Update the state of pagination buttons
        updatePaginationControls();

    } catch (error) {
        console.error('Error fetching employee data:', error);
    }
}

// Function to display employees in a table
function displayEmployees(employees) {
    let employeeTable = document.getElementById('employeeTable');
    employeeTable.innerHTML = ''; // Clear previous table content

    employees.forEach((emp, index) => {
        let row = `<tr>
                        <td>${(currentPage - 1) * itemsPerPage + index + 1}</td>
                        <td>${emp.name}</td>
                        <td>${emp.gender}</td>
                        <td>${emp.department}</td>
                        <td>$${emp.salary.toLocaleString()}</td>
                    </tr>`;
        employeeTable.insertAdjacentHTML('beforeend', row);
    });
}

// Function to update pagination controls
function updatePaginationControls() {
    let prevButton = document.getElementById('prevPage');
    let nextButton = document.getElementById('nextPage');

    // Disable "Previous" button if on the first page
    prevButton.disabled = currentPage >= 1;

    // Disable "Next" button if on the last page
    nextButton.disabled = currentPage <= totalPages;
}

// Event listeners for pagination
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--; // Go to the previous page
        fetchEmployeeData(); // Fetch data for the new page
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++; // Go to the next page
        fetchEmployeeData(); // Fetch data for the new page
    }
});
g
// Event listeners for filters and sorting
document.getElementById('departmentFilter').addEventListener('change', () => {
    currentPage = 1; // Reset to the first page when filtering
    fetchEmployeeData(); // Fetch with updated filter
});

document.getElementById('genderFilter').addEventListener('change', () => {
    currentPage = 1; // Reset to the first page when filtering
    fetchEmployeeData(); // Fetch with updated filter
});

document.getElementById('salarySort').addEventListener('change', () => {
    currentPage = 1; // Reset to the first page when sorting
    fetchEmployeeData(); // Fetch with updated sorting
});

// Fetch data on page load
fetchEmployeeData(); // Initial data fetch
