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
    document.write("Your order form summary:");
    document.write("</h1>");
    document.write("<p>");
    document.write(myFirstName.value);
    document.write("</p>");

    console.log(myLastName.value);
    document.write("<p>");
    document.write(myLastName.value);
    document.write("</p>");

    console.log(myEmail.value);
    document.write("<p>");
    document.write(myEmail.value);
    document.write("</p>");

    console.log(myPhoneNumber.value);
    document.write("<p>");
    document.write(myPhoneNumber.value);
    document.write("</p>");

    console.log(myBakeryItem.value);
    document.write("<p>");
    document.write(myBakeryItem.value);
    document.write("</p>");

    console.log(myQuantity.value);
    document.write("<p>");
    document.write(myQuantity.value);
    document.write("</p>");

    console.log(mySpecialInstructions.value);
    document.write("<p>");
    document.write(mySpecialInstructions.value);
    document.write("</p>");

    console.log(myCreditCardNumber.value);
    document.write("<p>");
    document.write(myCreditCardNumber.value);
    document.write("</p>");

    console.log(mySecurityCode.value);
    document.write("<p>");
    document.write(mySecurityCode.value);
    document.write("</p>");

    console.log(myExpirationDate.value);
    document.write("<p>");
    document.write(myExpirationDate.value);
    document.write("</p>");

    console.log(myAdditional.value);
    document.write("<p>");
    document.write(myAdditional.value);
    document.write("</p>");
}