function f0_nb(){
   curl http://localhost:5000/api/v1/f0_non_biodegradable_dbin
}


function f0_b(){
  curl http://localhost:5000/api/v1/f0_biodegradable_dbin
}


function f1_nb(){ 
   curl http://localhost:5000/api/v1/f1_non_biodegradable_dbin
}
 
function f1_b(){ 
  curl http://localhost:5000/api/v1/f1_biodegradable_dbin
}


function f2_nb(){ 
   curl http://localhost:5000/api/v1/f2_non_biodegradable_dbin
}
 
function f2_b(){ 
  curl http://localhost:5000/api/v1/f0_biodegradable_dbin
}

function f3_nb(){ 
   curl http://localhost:5000/api/v1/f3_non_biodegradable_dbin
}
 
function f3_b(){ 
  curl http://localhost:5000/api/v1/f0_biodegradable_dbin
}


f0_nb
f0_b

f1_nb
f1_b

f2_nb
f2_b

f3_nb
f3_b
