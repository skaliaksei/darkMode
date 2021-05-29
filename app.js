const fs = require('fs')
const img = fs.readdirSync('./images')

console.log(img)
fs.writeFile('images.json', JSON.stringify(img), 'utf8', (err) => {
    if(err)
    console.log('Error!')
})