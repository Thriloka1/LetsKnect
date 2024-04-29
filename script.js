var counter=1;
setInterval(function (){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>9)
    {
        counter=1;
    }
},1000)


// Dummy job data
const jobs = [
    { title: 'Software Engineer', location: 'Tokyo', type: 'Full-time' },
    { title: 'English Teacher', location: 'Osaka', type: 'Part-time' },
    { title: 'Marketing Manager', location: 'Kyoto', type: 'Full-time' },
    { title: 'Graphic Designer', location: 'Nagoya', type: 'Contract' },
    { title: 'Translator', location: 'Fukuoka', type: 'Freelance' },
    { title: 'Web Developer', location: 'Tokyo', type: 'Full-time' },
    { title: 'Sales Representative', location: 'Osaka', type: 'Full-time' },
    { title: 'Customer Service Representative', location: 'Kyoto', type: 'Part-time' },
    { title: 'Accountant', location: 'Nagoya', type: 'Full-time' },
    { title: 'HR Manager', location: 'Fukuoka', type: 'Contract' },
    { title: 'Chef', location: 'Tokyo', type: 'Full-time' },
    { title: 'Barista', location: 'Osaka', type: 'Part-time' },
    { title: 'Delivery Driver', location: 'Kyoto', type: 'Full-time' },
    { title: 'Data Analyst', location: 'Nagoya', type: 'Contract' },
    { title: 'Content Writer', location: 'Fukuoka', type: 'Freelance' },
    { title: 'UI/UX Designer', location: 'Tokyo', type: 'Full-time' },
    { title: 'Photographer', location: 'Osaka', type: 'Part-time' },
    { title: 'Electrician', location: 'Kyoto', type: 'Full-time' },
    { title: 'Architect', location: 'Nagoya', type: 'Contract' }
];

// Function to display job listings
function displayJobs(jobsToShow) {
    const jobList = document.querySelector('.job-list');
    jobList.innerHTML = '';
    jobsToShow.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
        `;
        jobList.appendChild(jobItem);
    });
}

// Function to search for jobs
function searchJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm) ||
        job.type.toLowerCase().includes(searchTerm)
    );
    displayJobs(filteredJobs);
}


