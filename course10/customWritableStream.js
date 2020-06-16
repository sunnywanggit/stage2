const {Writable} = require('stream')

//这是一个可读的 stream
const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        //callback 必须要调用，不调用就会一直卡在这个地方
        callback()
    }
})


//运行之后，你输入什么东西控制台就会打印出什么东西
//这个就是我们自定义的可以写入的 stream
process.stdin.pipe(outStream)

//下面的代码和上面的那一句代码是等价的
// process.stdin.on('data',(chunk)=>{
//     outStream.write(chunk)
// })