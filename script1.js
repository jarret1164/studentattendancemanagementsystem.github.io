// Get user role and attendance actions
const userRoleDiv = document.getElementById('user-role');
const attendanceActionsDiv = document.getElementById('attendance-actions');
const markAttendanceButton = document.getElementById('mark-attendance');
const recordAttendanceButton = document.getElementById('record-attendance');

// Get system management buttons
const manageUsersButton = document.getElementById('manage-users');
const configureSystemButton = document.getElementById('configure-system');
const generateReportsButton = document.getElementById('generate-reports');

// Set user role
userRoleDiv.textContent = 'Welcome, ' + getCookie('username') + '!';

// Add event listeners for attendance actions
markAttendanceButton.addEventListener('click', markAttendance);
recordAttendanceButton.addEventListener('click', recordAttendance);

// Add event listeners for system management options
manageUsersButton.addEventListener('click', manageUsers);
configureSystemButton.addEventListener('click', configureSystem);
generateReportsButton.addEventListener('click', generateReports);

// Function to mark attendance
function markAttendance() {
    // Simulate biometric scan
    const scanResult = prompt('Biometric scan result (Match/No Match):');
    if (scanResult === 'Match') {
        alert('Attendance recorded successfully.');
    } else {
        alert('Invalid scan. Please try again.');
    }
}

// Function to record attendance
function recordAttendance() {
    // Simulate biometric scan
    const scanResult = prompt('Biometric scan result (Match/No Match):');
    if (scanResult === 'Match') {
        alert('Attendance recorded successfully.');
    } else {
        alert('Invalid scan. Please try again.');
    }
}

// Function to manage users
function manageUsers() {
    alert('Managing users...');
}

// Function to configure system
function configureSystem() {
    alert('Configuring system...');
}

// Function to generate reports
function generateReports() {
    alert('Generating reports...');
}

// Function to get cookie value
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}