const asyncHandler = require("express-async-handler");
const axios = require('axios');

const secretKey = process.env.PAYSTACK_SECRET_KEY;


const payment = asyncHandler(async(req, res) => {

    try {
        // Get payment details from the request body
        const { amount, email, metadata, event, data } = req.body;
    
        // Make a request to Paystack API to initialize payment
        const response = await axios.post(
          'https://api.paystack.co/transaction/initialize',
          {
            amount,
            email,
            metadata,
            // currency: "NGN"
          },
          {
            headers: {
              Authorization: `Bearer ${secretKey}`,
              'Content-Type': 'application/json',
            },
          }
        );
    
        // Send the response data back to the frontend
        res.json(response.data);

      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while initiating payment.' });
      }
})



 


module.exports = {
  payment,
}
