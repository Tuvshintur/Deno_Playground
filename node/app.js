const fs = require('fs').promises;

const text = 'This is a test ';
const encoder = new TextEncoder();
const data = encoder.encode(text);

fs.writeFile('message.txt', data).then(() => {
    console.log('wrote to file');
});

//node app.js
