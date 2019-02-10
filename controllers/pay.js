const paypal = require('paypal-rest-sdk');

// Exporting things to other node scripts
module.exports = {

    // /pay accepts { amount: xxx } as the body
    pay: (req, res) => {
        // Configuration of the PayPal SDK
        paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': 'ARayWb3E437GcXlU6nx_g_b9smWF4u_Hh4R0_RVD28Zz9VvyhgnhfZJ-qpzFLeP91rIOmD9CxH9NZDb4',
        'client_secret': 'EF7eon6WpkT01H4idIArKueGngHkRknpM563XgAtUvCrihCm6wtBkrujA95n70-sn2LYKOGg5qodMMux'
        });

        const { amount } = req.body || 50;
        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://157.230.170.230:3000/pay/success",
                "cancel_url": "http://157.230.170.230:3000/pay/failure"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "DashCash Credit",
                        "sku": "123",
                        "price": amount,
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": amount
                },
                "description": "Transfer from money to DashCash credits."
            }]
        };

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.error(error);
                throw error;
            } else {
                for(i = 0; i < payment.links.length; i++) {
                    if(payment.links[i].rel === 'approval_url') {
                        res.redirect(payment.links[i].href);
                    }
                }
            }
        });

    },

    success: (req, res) => {
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "25.00"
                }
            }]
        };

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log(JSON.stringify(payment));
                res.status(200).json({ 'status': 'Success' });
            }
        });
    },

    cancel: (req, res) => {
        
    }
};