function checkAvailability(busNumber) {
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD

    let statusMessage = '';
    if (busNumber === '104' && currentDateString === '2024-03-23') {
        statusMessage = 'This bus is in the garage today.';
    } else {
        statusMessage = 'This bus is available.';
    }

    document.getElementById(`status-${busNumber}`).innerText = statusMessage;
}

