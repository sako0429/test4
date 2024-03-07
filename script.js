async function saveToJson() {
    const jobData = {
        name: document.getElementById('nameInput').value,
        subname: document.getElementById('subnameInput').value,
        count: document.getElementById('countityInput').value,
        width: document.getElementById('widthInput').value,
        length: document.getElementById('lengthInput').value,
        ink: document.getElementById('inkInput').value,
        varnish: document.getElementById('varnishInput').value,
        jobType: document.getElementById('jobType').value,
        coverVarnish: document.getElementById('coverInput').checked
    };

    const formattedData = `${jobData.name}, ${jobData.subname}, ${jobData.count}, ${jobData.width}, ${jobData.length}, ${jobData.ink}, ${jobData.varnish}, ${jobData.jobType}, ${jobData.coverVarnish ? 'Covered' : 'Not Covered'}`;

    try {
        const response = await fetch('base.txt');
        if (!response.ok) {
            throw new Error('Failed to fetch base.txt');
        }
        const existingData = await response.text();
        const newData = existingData ? `${existingData}\n${formattedData}` : formattedData;
        await fetch('base.txt', {
            method: 'PUT',
            body: newData
        });
        console.log('Data saved successfully.');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

function closeCurrentPage() {
    // Close the current window
    window.close();
}

function openPage() {
    window.open("job.html", "_blank")
}
