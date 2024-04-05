const menu = [
  {
    name: "Pizza",
    price: 10,
    quantity: 5,
  },
  {
    name: "Burger",
    price: 8,
    quantity: 3,
  },
  {
    name: "Salad",
    price: 6,
    quantity: 12,
  },
];

const order = {};

// Displaying Menu

console.log("Menu:");

for (i = 0; i < menu.length; i++) {
  console.log(`${i + 1}. ${menu[i].name} - Rs. ${menu[i].price}`);
}

// Prompt User to Select Items from the Menu with quantities.

let orderComplete = false;

while (!orderComplete) {
  const itemIndex = parseInt(prompt("Enter item number to order:")) - 1;

  const item = menu[itemIndex];

  const quantity = parseInt(prompt(`Enter quantity of ${item.name} to order:`));

  if (quantity > item.quantity) {
    console.log(`Sorry, only ${item.quantity} ${item.name} left in stock.`);
  } else {
    order[item.name] = quantity;
    item.quantity -= quantity;
  }
  const anotherOrder = prompt(
    `Would you like to order another item? (y/n)`
  ).toLowerCase();
  if (anotherOrder === "n") {
    orderComplete = true;
  }
}

// Displaying order summery and bill

let total = 0;

console.log("Order Summary:");

Object.entries(order).forEach(([itemName, itemQuantity]) => {
  const item = menu.find((m) => m.name === itemName);
  const itemTotal = item.price * itemQuantity;
  console.log(`${itemName} x ${itemQuantity} - Rs. ${itemTotal}`);
  total += itemTotal;
});

console.log(`Total: Rs. ${total}`);
