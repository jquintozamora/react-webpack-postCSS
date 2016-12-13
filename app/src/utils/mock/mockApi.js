
var myData = require("./data");

module.exports = {
    getResults: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: myData.data });
            }, 300);
        });
    }
};
