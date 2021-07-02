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
    subject: 'Peak Value for Floor 0 - Non Biodegradable Dustbin Reached',
    text: 'Please Reach Out To Apartment, XYZ - Floor 0 For Collection Of Wastage @ c/o Non Biodegradable Dustbin.'
  };
exports.f0_nbController = function(req,res,next){
     for(var g0_nbio = 1;g0_nbio<=10;g0_nbio++){ 
             //considering 70% of wastage as threshold value.          
             if(g0_nbio == 7)
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
                 console.log("FIlled %age =" + g0_nbio*10)
                 g0_nbio+1;
             }
     }


}