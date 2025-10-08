start.onclick = function() {
    location.reload();
}       
try {
    // Step 1: Ask for Name
    let name = prompt("Enter your name:");
    if (!name){
        alert("Name not entered. Exiting...");
        throw new Error("No name entered");
    }

    // Step 2: Confirm Order
    if (!confirm("Hello " + name + "! Do you want to order food?")) {
        alert("Goodbye! See you next time!");
        throw new Error("Order cancelled");
    }

    // Step 3: Menu stored as JSON string
    let menuJSON = `{
        "1": { "item": "Pizza", "price": 150 },
        "2": { "item": "Burger", "price": 100 },
        "3": { "item": "Sandwich", "price": 80 }
    }`;

    // Convert JSON string to JS object
    let menu = JSON.parse(menuJSON);

    let choice = prompt("Menu:\n1. Pizza (₹150)\n2. Burger (₹100)\n3. Sandwich (₹80)\nEnter your choice (1-3):");
    if (!menu[choice]) {
        alert("Invalid choice!");
        throw new Error("Invalid menu choice");
    }

    // Step 4: Quantity
    let quantity = Number(prompt("Enter quantity:"));
    if (isNaN(quantity) || quantity < 1) {
        alert("Invalid quantity!");
        throw new Error("Invalid quantity entered");
    }

    // Step 5: Bill Processing with Promise
    let total = menu[choice].price * quantity;

    confirm("You ordered " + quantity + " " + menu[choice].item + "(s). Total bill is ₹" + total + ". Proceed to payment?");
    let bill = new Promise((resolve, reject) => {
        if (total > 0) {
            // Store final order in JSON object
            let order = {
                customer: name,
                item: menu[choice].item,
                quantity: quantity,
                total: total
            };
            // Convert order object to JSON string
            resolve(JSON.stringify(order, null, 4));
        } else {
            reject("Error calculating bill!");
        }
    });

    // Step 6: Show Result
    bill.then(orderJSON => {
        alert("Order Successful!\n\n" + orderJSON);
    }).catch(err => alert(err));

} catch (error) {
    // Step 7: Error Handling
    alert("Something went wrong: " + error.message);

}