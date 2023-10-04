//The helpers.js file exports an object with a single method called format_date. 
//This method takes a date parameter and returns a formatted date string in the format "MM/DD/YYYY".

module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      },


    
};

// const helpers = require('./helpers.js');

// const formattedDate = helpers.format_date(new Date());
// console.log(formattedDate); // Output: "MM/DD/YYYY"