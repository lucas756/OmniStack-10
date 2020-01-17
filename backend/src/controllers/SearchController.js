const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(resquest, response) {
     const { latitude, longitude } = resquest.query;

       //const techsArray = parseStringAsArray(techs);
         
        const devs = await Dev.find({
           // techs: {
             //   $in: techsArray,
            //},
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        
        console.log(devs);
        

       return response.json({ devs });
    }
}