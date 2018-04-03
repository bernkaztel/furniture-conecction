



function getCheckOut(eventTrigger) {
    container.classList.add('d-none');
    homePage.classList.add('d-none');
    productPage.classList.add('d-none');
    checkout.classList.remove('d-none');
    calculateTotal(eventTrigger);
}
function calculateTotal() {
    
    var finalCart = shoppingCart
    console.log(finalCart);
    getPriceTitle(finalCart);
}

function getPriceTitle(finalCart) {
    let template = '';
    let arrayNumbers = [];
    finalCart.forEach(element => {
        template += `
        <br>
      <br>
      <br>
      <br>

        <div class="row">
        <div class="col">
            <img class="img-fluid" height="100px"  width="100px" src="${element.imagen}" alt="cama">
        </div>
        <div class="col">
            <p> ${element.name} </p>
        </div>
        <div class="col">
            <p>${element.price}</p>
        </div>
    </div>
        `
        //   console.log(template);
        arrayNumbers.push(parseInt(element.price.replace( /[^0-9]/, '' )));
    });
     const tableCont = document.getElementById("tableContainer");
 tableCont.innerHTML = template;
    console.log(arrayNumbers);
    let totalSum = arrayNumbers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    console.log(totalSum);

    let template2 =
        ` <div class="col">
    <h3 class="font-weight-bold text-capitalize" >Grand Total</h3>
        <p>${totalSum}</p>
    </div>`
tableCont.insertAdjacentHTML('beforeEnd', template2);
 getPayPal(totalSum);
}






//Maddie
function getPayPal(totalSum) {
    paypal.Button.render({

        env: 'sandbox', // sandbox | production

        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create
        client: {
            sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
            production: 'AVRT2nevRMk7taN7-i0V0ydxSA0mYOLHz6pNqiR5dnYIH9WJT39LzpjYBrcgxhpQg9ZRTRb1pi4ld9o6'
        },

        // Show the buyer a 'Pay Now' button in the checkout flow
        commit: true,

        // payment() is called when the button is clicked
        payment: function (data, actions) {

            // Make a call to the REST api to create the payment
            return actions.payment.create({
                payment: {
                    transactions: [{
                        amount: {
                            total: `${totalSum}`,
                            currency: 'MXN'
                        }
                    }]
                }
            });
        },

        // onAuthorize() is called when the buyer approves the payment
        onAuthorize: function (data, actions) {

            // Make a call to the REST api to execute the payment
            return actions.payment.execute().then(function () {
                window.alert('Payment Complete!');
            });
        }

    }, '#paypal-button-container');

}