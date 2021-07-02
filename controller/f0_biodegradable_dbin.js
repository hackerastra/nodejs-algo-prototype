const nodemailer = require('nodemailer');
const config = require('../config.json')
const transporter = nodemailer.createTransport({
    service: config.service,
    auth: {
      user: config["email-id"],
      pass: config["email-pass"]
    }
  });
  var mailOptions = {
    from: config["email-id"],
    to: 'som.brata@gmail.com',
    subject: 'Peak Value for Floor 0 - Biodegradable Dustbin Reached',
    text: 'Please Reach Out To Apartment, XYZ - Floor 0 For Collection Of Wastage @ c/o Biodegradable Dustbin.'
  };
exports.f0_bController = function(req,res,next){
     for(var g0_bio = 1;g0_bio<=10;g0_bio++){     
             //considering 70% of wastage as threshold value.      
             if(g0_bio == 7)
             {
               
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      res.send({"peakValueReached":true,"Error":error.toString()})                   
                    } else {
                      res.send({"peakValueReached":true,"emailNotificationSent":true,"successLogs":info.response})
                    }
                  });
                
             }
             else
             {
                 g0_bio+1;
             }
     }


}