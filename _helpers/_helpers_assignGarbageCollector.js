var sample = require('../sample-range-data.json')
function assignedGarbageCollector(garbageCollectorDetails){ return garbageCollectorDetails[Math.floor(Math.random()*garbageCollectorDetails.length)];}

async function assignedGC(){
    var garbageCollectorDetails = sample["garbageCollector-details"]
    let result = await new Promise((resolve, reject) => {
        resolve(assignedGarbageCollector(garbageCollectorDetails))
      });
      return result.garbageCollectorEmailAddress;
}
module.exports = { assignedGC } 