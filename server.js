const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const intentName = req.body.queryResult.intent.displayName;

  if (intentName === 'GenerateAvatar') {
    const response = {
      fulfillmentText: "Sure! Let’s create your avatar. Please upload your photo or describe your preferences.",
      outputContexts: [
        {
          name: `${req.body.session}/contexts/avatar-generated`,
          lifespanCount: 5,
        },
      ],
    };
    res.json(response);
  } else if (intentName === 'SaveProgress') {
    const response = {
      fulfillmentText: "Your progress has been saved successfully!",
      outputContexts: [
        {
          name: `${req.body.session}/contexts/progress-saved`,
          lifespanCount: 5,
        },
      ],
    };
    res.json(response);
  } else if (intentName === 'TestAvatar') {
    const response = {
      fulfillmentText: "Here’s a preview of your avatar. Let me know if you’d like to make any changes.",
      outputContexts: [
        {
          name: `${req.body.session}/contexts/avatar-tested`,
          lifespanCount: 5,
        },
      ],
    };
    res.json(response);
  } else if (intentName === 'GenerateQRCode') {
    const response = {
      fulfillmentText: "Here’s your QR code. You can download it or share it with others.",
      outputContexts: [
        {
          name: `${req.body.session}/contexts/qr-code-generated`,
          lifespanCount: 5,
        },
      ],
    };
    res.json(response);
  } else if (intentName === 'SetGPSLocation') {
    const response = {
      fulfillmentText: "Please enter your latitude and longitude.",
      outputContexts: [
        {
          name: `${req.body.session}/contexts/gps-set`,
          lifespanCount: 5,
        },
      ],
    };
    res.json(response);
  } else {
    res.json({ fulfillmentText: "Sorry, I didn’t understand that." });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
