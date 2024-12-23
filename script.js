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

    console.log('Checking availability for bus number: ' + busNumber);
    console.log('Current date: ' + currentDateString);

    if (busSchedule[busNumber]) {
        var bus = busSchedule[busNumber];
        var statusMessage = bus.date === currentDateString ? bus.statusMessage : 'This bus is available.';
        console.log('Status message: ' + statusMessage);

        document.getElementById('status-' + busNumber).innerText = statusMessage;
    } else {
        document.getElementById('status-' + busNumber).innerText = 'Invalid bus number.';
    }
}
