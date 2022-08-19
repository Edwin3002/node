const fs = require('fs')

// -----------------read file
// fs.readFile('./fileSystem.html', 'utf-8', (err, content) => {
// if(err){
//     throw err
// }else{
//     console.log(content);
// }
// });

// -----------------rename file
// fs.rename('./fileSystem.html', 'fs2.html', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('name changed');
// })

// -----------------add content to file
// fs.appendFile('./fs2.html', '<p>hola</p>', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log(' content add');
// })

// fs.writeFile('./fs2.html', '<h1>Que se dice</h1>', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log(' content replace');
// })

// -----------------delete file
// fs.unlink('./fs3.html', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('file delete');
// })