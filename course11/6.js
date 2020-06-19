
setTimeout(()=>{
    process.send({name:'father'})
},2000)

process.on('message',function (data) {
    console.log('子进程得到值：',data)
})

