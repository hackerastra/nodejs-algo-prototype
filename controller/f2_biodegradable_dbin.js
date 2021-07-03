const nodemailer = require('nodemailer'),
      config = require('../config.json'),
      distance = require('../_helpers/_helpers_distance'),
      assignGC = require('../_helpers/_helpers_assignGarbageCollector'),
      transporter = nodemailer.createTransport({
    service: config.service,
    auth: {
      user: config["email-id"],
      pass: config["email-pass"]
    }
  });
  
exports.f2_bController = async function(req,res,next){
    let recipientEmailAddress = await assignGC.assignedGC();
    let dist = await distance.distance() 
    var mailOptions = {
        from: config["email-id"],
        to: recipientEmailAddress,
        subject: 'Peak Value for Floor 2 - Building XYZ , Landmark ABC, City : ### - Biodegradable Dustbin Reached',
        text: 'Please Reach Out To Apartment, XYZ - Floor 2 For Collection Of Wastage @ c/o Biodegradable Dustbin.' + 'Distance From Your Location To Appartment Is: ' + dist + 'km.' 
  };
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