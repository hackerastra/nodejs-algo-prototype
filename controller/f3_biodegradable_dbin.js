const nodemailer = require('nodemailer');
      config = require('../config.json')
      transporter = nodemailer.createTransport({
    service: config.service,
    auth: {
      user: config["email-id"],
      pass: config["email-pass"]
    }
  });
  distance = require('../_helpers/_helpers_distance'),
  assignGC_special = require('../_helpers/_helpers_assignGarbageCollector_special')
exports.f3_bController = async function(req,res,next){
        let recipientEmailAddress = await assignGC_special.assignedGC_special();
        let dist = await distance.distance() 
        var mailOptions = {
         from: config["email-id"],
         to: recipientEmailAddress,
         subject: 'Peak Value for Floor 3 - Building XYZ , Landmark ABC, City : ### - Biodegradable Dustbin Reached',
         text: 'Please Reach Out To Apartment, XYZ - Floor 3 For Collection Of Wastage @ c/o Biodegradable Dustbin.' + 'Distance From Your Location To Appartment Is: ' + dist + 'km. Also Please Note You Have Been Assigned for this because you are marked for alloting tasks in covid infected or near by apartments. Do Take utmost care for the execution of your job.' 
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