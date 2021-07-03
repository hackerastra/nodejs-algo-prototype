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
  })
exports.f0_nbController = async function(req,res,next){
      let recipientEmailAddress = await assignGC.assignedGC();
      let dist = await distance.distance() 
      var mailOptions = {
          from: config["email-id"],
          to: recipientEmailAddress,
          subject: 'Peak Value for Floor 0 - Building XYZ , Landmark ABC, City : ### - Non Biodegradable Dustbin Reached',
          text: 'Please Reach Out To Apartment, XYZ - Floor 0 For Collection Of Wastage @ c/o Non Biodegradable Dustbin.' + 'Distance From Your Location To Appartment Is: ' + dist + 'km.' 
  };
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
                 g0_nbio+1;
             }
     }


}