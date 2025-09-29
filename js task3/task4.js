// Task 4: Travel Fare Calculator
let distance = Number(prompt("Enter the distance in kilometers:"));
let transportType = prompt("Enter transport type:\n- Bus\n- Train\n- Taxi\n- Auto").toLowerCase();

let farePerKm;

// Use switch to determine fare per km based on transport type
switch(transportType) {
    case "bus":
        farePerKm = 2;
        break;
    case "train":
        farePerKm = 5;
        break;
    case "taxi":
        farePerKm = 15;
        break;
    case "auto":
        farePerKm = 10;
        break;
    default:
        alert("Invalid transport type! Please enter Bus, Train, Taxi, or Auto.");
        farePerKm = 0;
        break;
}

// Calculate total fare
if (farePerKm > 0) {
    let totalFare = distance * farePerKm;
    
    alert("Travel Fare Calculation:\n" +
          "Distance: " + distance + " km\n" +
          "Transport Type: " + transportType.charAt(0).toUpperCase() + transportType.slice(1) + "\n" +
          "Fare per km: " + farePerKm + "\n" +
          "Total Fare: " + totalFare);
}