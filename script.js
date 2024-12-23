// Bus Data: Structured to handle multiple buses with dates and availability
var busSchedule = {
    '103': { date: '2024-03-22', statusMessage: 'This bus is available.' },
    '104': { date: '2024-03-23', statusMessage: 'This bus is unavailable.' },
    '105': { date: '2024-03-24', statusMessage: 'This bus is available.' },
    '106': { date: '2024-03-25', statusMessage: 'This bus is available.' },
};

// Function to check the availability of a bus
function checkAvailability(busNumber) {
    var currentDate = new Date(); // Get the current date
    var currentDateString = currentDate.toISOString().split('T')[0]; // Convert the current date to YYYY-MM-DD format

    console.log('Checking availability for bus number: ' + busNumber);
    console.log('Current date: ' + currentDateString);

    // Check if the bus number exists in the busSchedule object
    if (busSchedule[busNumber]) {
        var bus = busSchedule[busNumber];

        // If the bus date matches the current date, use the status message from the schedule
        // Otherwise, the bus is available (default message)
        var statusMessage = bus.date === currentDateString ? bus.statusMessage : 'This bus is available.';
        console.log('Status message: ' + statusMessage);

        // Update the HTML to display the status message for the correct bus
        document.getElementById('status-' + busNumber).innerText = statusMessage;
    } else {
        // If the bus number is invalid, display an error message
        document.getElementById('status-' + busNumber).innerText = 'Invalid bus number.';
    }
}
