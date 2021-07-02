//importing all the controllers

const f0_nbController = require('../controller/f0_non_biodegradable_dbin'), 
      f0_bController = require('../controller/f0_biodegradable_dbin'),
     
      f1_nbController = require('../controller/f1_non_biodegradable_dbin'),
      f1_bController = require('../controller/f1_biodegradable_dbin'),

      f2_nbController = require('../controller/f2_non_biodegradable_dbin'),
      f2_bController = require('../controller/f2_biodegradable_dbin'),

      f3_nbController = require('../controller/f3_non_biodegradable_dbin'),
      f3_bController = require('../controller/f3_biodegradable_dbin')

module.exports = function (router, path) {
    
    //ground floor biodegradable waste
    router.get('/api/v1/f0_non_biodegradable_dbin',function(req,res,next){
        f0_nbController.f0_nbController(req,res,next);
    })
  
    //ground floor - non biodegradable waste
    router.get('/api/v1/f0_biodegradable_dbin',function(req,res,next){
        f0_bController.f0_bController(req,res,next);
    })

    //1st floor biodegradable waste
    router.get('/api/v1/f1_non_biodegradable_dbin',function(req,res,next){
        f1_nbController.f1_nbController(req,res,next);
    })
  
    //1st floor - non biodegradable waste
    router.get('/api/v1/f1_biodegradable_dbin',function(req,res,next){
        f1_bController.f1_bController(req,res,next);
    })


    //2nd floor biodegradable waste
    router.get('/api/v1/f2_non_biodegradable_dbin',function(req,res,next){
        f2_nbController.f2_nbController(req,res,next);
    })
  
    //2nd floor - non biodegradable waste
    router.get('/api/v1/f2_biodegradable_dbin',function(req,res,next){
        f2_bController.f2_bController(req,res,next);
    })

    //3rd floor biodegradable waste
    router.get('/api/v1/f3_non_biodegradable_dbin',function(req,res,next){
        f3_nbController.f3_nbController(req,res,next);
    })
  
    //3rd floor - non biodegradable waste
    router.get('/api/v1/f3_biodegradable_dbin',function(req,res,next){
        f3_bController.f3_bController(req,res,next);
    })

    //4th floor biodegradable waste
    router.get('/api/v1/f4_non_biodegradable_dbin',function(req,res,next){
        f4_nbController.f4_nbController(req,res,next);
    })
  
    //4th floor - non biodegradable waste
    router.get('/api/v1/f4_biodegradable_dbin',function(req,res,next){
        f4_bController.f4_bController(req,res,next);
    })

}