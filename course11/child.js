// process.on('message',function (m) {
//     console.log('子进程得到值：',m)
// })

setTimeout(()=>{
    process.send({name:'father'})
},2000)

