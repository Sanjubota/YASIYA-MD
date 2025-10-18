const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    YASIYA-MD~IVhXDAzZ#7P-zQ9Hu1cin_j6xbWQ3NNteXNA92ff_Je7Mq7KqZK8: process.env.YASIYA-MD~IVhXDAzZ#7P-zQ9Hu1cin_j6xbWQ3NNteXNA92ff_Je7Mq7KqZK8 || ''
};
