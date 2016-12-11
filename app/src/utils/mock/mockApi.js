var myData = require("./data");

module.exports = {
    getResults: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, { data: myData.data }));
            }, 300);
        });
    }
};
