// Dark Mode Toggle with LocalStorage
const darkModeToggle = document.getElementById('darkModeToggle');

// Check for dark mode preference on page load
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
        darkModeToggle.innerHTML = '🌞'; // Sun icon for dark mode
    } else {
        document.body.classList.remove('dark');
        darkModeToggle.innerHTML = '🌙'; // Moon icon for light mode
    }
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        darkModeToggle.innerHTML = '🌞'; // Sun icon for dark mode
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.innerHTML = '🌙'; // Moon icon for light mode
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Hero Section: Fade-in effect with CSS Transition
document.addEventListener("DOMContentLoaded", function() {
    const heroContent = document.querySelector(".hero-content");
    heroContent.classList.add('fade-in');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Array of Projects with Text-Based Icons (no third-party plugins)
const projects = [
    {
        title: 'Basic Calculator',
        description: 'Simple Python calculator.',
        link: 'https://github.com/Cynthia-M-M/week-1-python-assignment.git',
        icon: '🖩' // Text-based icon for calculator
    },
    {
        title: 'Database Technologies',
        description: 'SQL, spreadsheets, and other data storage solutions.',
        link: 'https://github.com/PLP-Database-Design/wk-2a-Cynthia-M-M.git',
        icon: '🗃️' // Text-based icon for database
    },
    {
        title: 'Advanced Calculator',
        description: 'Python discount calculator.',
        link: 'https://github.com/Cynthia-M-M/discount-calculator.git',
        icon: '📊' // Text-based icon for percentage
    },
    {
        title: 'Hostel Management System',
        description: 'A web-based system for managing hostel bookings, room allocation, and billing, developed using Node.js, Express, and MySQL.',
        link: 'https://1drv.ms/f/c/2bb2f9afc8ae1149/EsdQ3eHpsZtPiGVbJDkmYI4B5skIfjMQlYTg9_tKewU37w?e=MjMaoh',
        icon: '🏨' // Text-based icon for hostel
    },
    {
        title: 'Hotel Management System',
        description: 'A hotel management system developed using HTML, CSS, JavaScript, and PHP, handling bookings and check-ins.',
        link: 'https://1drv.ms/f/c/2bb2f9afc8ae1149/ErF_d7NI-c5FvQ0lq6rP14MBRLdNguXdXy_oULbf27Mzww?e=4fXuTC',
        icon: '🏨' // Text-based icon for hotel
    },
    {
        title: 'Library Management System',
        description: 'A Library Management System built with Python, managing books, users, and transactions.',
        link: 'https://github.com/Cynthia-M-M/codess.git',
        icon: '📚' // Text-based icon for library
    },
];

// Select the container where the projects will be inserted
const projectsGrid = document.getElementById('projects-grid');
const showMoreButton = document.getElementById('show-more-btn');

// Define how many projects to initially show
let visibleProjectsCount = 3;

// Function to display the projects
function displayProjects() {
    // Clear the current grid
    projectsGrid.innerHTML = '';

    // Loop through the projects and add the visible ones
    for (let i = 0; i < visibleProjectsCount; i++) {
        const project = projects[i];
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <div class="project-icon">
                ${project.icon} <!-- Using text-based icons -->
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectsGrid.appendChild(projectCard);
    }
}

// Function to show more projects
function showMoreProjects() {
    visibleProjectsCount = projects.length;
    displayProjects();
    showMoreButton.style.display = 'none'; // Hide the button after clicking
}

// Initialize the first set of visible projects
displayProjects();

// Add event listener for the "Show More" button
showMoreButton.addEventListener('click', showMoreProjects);

// Contact Form Submission with Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validate the form data (basic check)
    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Show submitting status
    const statusElement = document.getElementById("form-status");
    statusElement.textContent = "Sending...";

    // Simulate form submission (You can replace this with actual submission logic)
    setTimeout(function() {
        // After submission (simulate success)
        statusElement.textContent = "Message sent successfully! Thank you for your message.";
        
        // Clear form after submission
        document.getElementById("contact-form").reset();
    }, 2000);
});

// Scroll to Top Functionality
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Show scroll-to-top button after scrolling 300px down
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
