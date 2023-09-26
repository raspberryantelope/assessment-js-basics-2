///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

function calculateTotal(arr) {
    return arr.reduce((total, food) => total + food.price, 0)
}

const summedPrice = calculateTotal(cart)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    return cartTotal * (1 + tax) - couponValue
}
console.log(calcFinalPrice(20, 10, .06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
   For the cart and checkout page specifically, I feel like at least the following properties would be necessary:
    - order summary
        This gives the customer a rundown of what they're about to pay for, to verify they have the correct items.
    - name
        Obviously the customer's name is important.
    - phone number
        Necessary for sending delivery updates, receipts, and reminders to the correct place
    - address
        Definitely need to make sure the food gets to the right place, also collects zip code for acquiring tax rate (if needed)
    - email
        for sending receipts, updates, and reminders
    - order total
        for knowing how much they're about to pay



*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customer = {
    order: [
        {
            name: 'Cheese Pizza',
            price: 8.99,
            category: 'entree',
            popularity: 5,
            rating: 4.5,
            tags: [ 'entree', 'classic' ]
        },
        {
            name: "S'mores Pizza",
            price: 5.99,
            category: 'side',
            popularity: 4,
            rating: 4,
            tags: [ 'side', 'dessert' ]
        },

    ],
    name: "Kyle Johnson",
    phone: "801-867-5309",
    address: "560 S 100 W Provo UT 84606",
    email: "testemail@example.com",
    ordertotal: calcFinalPrice(14.98, 2, .0725)
}
console.log(customer)