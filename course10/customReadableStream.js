const {Readable} = require('stream')

//创建一个 readable 的实例
const inStream = new Readable()

inStream.push('这是第一部分数据')
inStream.push('这是第二部分数据')

//null 的意思就是说我把所有的数据都推完了

inStream.push(null)

inStream.on('data',(chunk => {
    process.stdout.write(chunk)
    console.log('写数据了');
}))

