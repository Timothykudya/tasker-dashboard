document.addEventListener('DOMContentLoaded', function() {
    const addTaskForm = document.getElementById('add-task-form');
    const complaintsForm = document.getElementById('complaints-form');

    addTaskForm.addEventListener('submit', function(event) {
        if (!addTaskForm.checkValidity()) {
            event.preventDefault(); // Prevent form submission if fields are not filled
            alert('Please fill in all required fields in the Add New Task form.');
        } else {
            alert('You have successfully added a new task.');
        }
    });

    complaintsForm.addEventListener('submit', function(event) {
        const complaintsTextArea = document.getElementById('complaints-text');
        if (!complaintsForm.checkValidity() || complaintsTextArea.value.trim() === '') {
            event.preventDefault(); // Prevent form submission if fields are not filled
            alert('Please fill in all required fields in the Complaints form.');
        } else {
            alert('You have successfully submitted your complaint.');
        }
    });

    // Show/hide job lists on click
    const clickableTitles = document.querySelectorAll('.clickable');

    clickableTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            const jobList = this.nextElementSibling;
            jobList.classList.toggle('hidden');
        });
    });

    // Accept/decline job functionality
    const acceptButtons = document.querySelectorAll('.accept-job-button');
    const declineButtons = document.querySelectorAll('.decline-job-button');

    acceptButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('You have accepted this job.');
        });
    });

    declineButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('You have declined this job.');
        });
    });

    // Function to handle profile picture change
    document.getElementById('profile-picture-input').addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function() {
            const profilePicture = document.getElementById('profile-picture');
            profilePicture.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    // Logout button functionality
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.classList.add('green');
    logoutButton.style.position = 'absolute';
    logoutButton.style.top = '10px';
    logoutButton.style.left = '10px';
    logoutButton.style.zIndex = '999';
    logoutButton.addEventListener('click', function() {
        // Your logout logic here
        alert('You have logged out.');
    });

    document.body.appendChild(logoutButton);
});
