//创建一个子进程,n实际上就是对子进程的一个引用
const child_process = require("child_process")
let n = child_process.fork('./6.js')

//如果子锦官城发出了一个message事件
n.on('message',function (m) {
    console.log('父进程得到值：',m)
})

n.send({hello:'world'})
