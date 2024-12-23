// Bus Data: Structured to handle multiple buses with dates and availability
var busSchedule = {
    '103': { date: '2024-03-22', statusMessage: 'This bus is available.' },
    '104': { date: '2024-03-23', statusMessage: 'This bus is in the garage today.' },
    '105': { date: '2024-03-24', statusMessage: 'This bus is available.' }
};

// Function to check the availability of a bus
function checkAvailability(busNumber) {
    var currentDate = new Date();
    var currentDateString = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD

    // Check if the bus exists in the schedule
    if (busSchedule[busNumber]) {
        var bus = busSchedule[busNumber];

        // Check if the bus is available or not on the current date
        var statusMessage = bus.date === currentDateString ? bus.statusMessage : 'This bus is available.';
        document.getElementById('status-' + busNumber).innerText = statusMessage;
    } else {
        // Error handling for invalid bus number
        document.getElementById('status-' + busNumber).innerText = 'Invalid bus number.';
    }
}
