const trips = [
    { to: 'Brazil', distance: 1000 },
    { to: 'China', distance: 2500 },
    { to: 'India', distance: 3000 }
];
let calculateDistance = () => {
    const selectedTrip = document.querySelector('input[name="trips"]:checked').value;
    const distanceInKm = trips.find(trips => trips.to === selectedTrip).distance;
    const distanceInMiles = (distanceInKm * 0.621371).toFixed(0);
    document.getElementById('Result').textContent = `The Distance Traveled: ${distanceInKm}Km / ${distanceInMiles}Miles.`;

};
calculateDistance();