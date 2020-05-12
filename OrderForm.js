myFirstName = document.getElementById("first name");
myLastName = document.getElementById("last name");
myEmail = document.getElementById("email");
myPhoneNumber = document.getElementById("phone number");
myBakeryItem = document.getElementById("bakery item");
myQuantity = document.getElementById("quantity");
mySpecialInstructions = document.getElementById("special instructions");
myCreditCardNumber = document.getElementById("credit card number");
mySecurityCode = document.getElementById("security code");
myExpirationDate = document.getElementById("expiration date");
myAdditional = document.getElementById("additional information");

function formfunction () {
    console.log(myFirstName.value);
    document.write("<h1>");
    document.write(myFirstName.value);
    document.write("</h1>");
}