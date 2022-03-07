const address = require('address')
const timeStamp = function(req,res){
    const event1 = new Date();
    const event2 = new Date();
    event2.setTime(event1.getTime());
    console.log(event1);
    console.log(address.ip())
    res.send('it is time stamps of day api')
}

module.exports.timeStamp=timeStamp;
module.exports.address=address;
