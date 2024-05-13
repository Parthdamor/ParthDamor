document.getElementById('create-button').addEventListener('click', function() {
    document.getElementById('new-screen').classList.toggle('hidden');
});



function generateResume() {
    const name = document.getElementById('name').value;
    const experience = document.getElementById('experience').value;

    if (name && experience) {
        const resumeContent = `
            <h3>${name}</h3>
            <p><strong>Experience:</strong> ${experience}</p>
        `;

        document.getElementById('resume-container').innerHTML = resumeContent;

        // Store data in local storage
        localStorage.setItem('resumeData', JSON.stringify({ name, experience }));
    } else {
        alert('Please fill in all fields.');
    }
}

// Check for stored data on page load
window.onload = function () {
    const storedData = localStorage.getItem('resumeData');
    if (storedData) {
        const { name, experience } = JSON.parse(storedData);
        document.getElementById('name').value = name;
        document.getElementById('experience').value = experience;
        generateResume();
    }
};