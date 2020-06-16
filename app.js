const fs = require('fs')

const stream = fs.createWriteStream('./big_file.txt')

for (let i = 0; i < 1000 ; i++) {
    stream.write(`我要往文件里面写入1000行数据${i}`)
}

stream.end()

console.log('done');