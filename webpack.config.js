const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'test'),
        compress: true,
        port: 9000
    }
};