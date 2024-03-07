/**
 * Calculates the receipt for the pizza order based on the selected size and toppings.
 */
function getReceipt() {
    /**
     * @type {string}
     * The text representation of the ordered items.
     */
    var text1 = "<h3>You Ordered:</h3>";

    /**
     * @type {number}
     * The running total cost of the order.
     */
    var runningTotal = 0;

    /**
     * @type {number}
     * The cost of the selected pizza size.
     */
    var sizeTotal = 0;

    /**
     * @type {HTMLCollectionOf<HTMLInputElement>}
     * The collection of size input elements.
     */
    var sizeArray = document.getElementsByClassName("size");

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;

    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    getTopping(runningTotal, text1);
}

/**
 * Calculates the cost of the selected toppings and updates the receipt.
 * 
 * @param {number} runningTotal - The running total cost of the order.
 * @param {string} text1 - The text representation of the ordered items.
 */
function getTopping(runningTotal, text1) {
    /**
     * @type {number}
     * The cost of the selected toppings.
     */
    var toppingTotal = 0;

    /**
     * @type {string[]}
     * The array of selected toppings.
     */
    var selectedTopping = [];

    /**
     * @type {HTMLCollectionOf<HTMLInputElement>}
     * The collection of topping input elements.
     */
    var toppingArray = document.getElementsByClassName("toppings");

    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;

    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    runningTotal = (runningTotal + toppingTotal);

    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}
