
function random_distance(dist){ return dist[Math.floor(Math.random()*dist.length)];}
async function distance(){
    const dist = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.6,7,7.5,8];
    let result = await new Promise((resolve, reject) => {
        resolve(random_distance(dist));
      });
      return result;
} 
module.exports = { distance }
