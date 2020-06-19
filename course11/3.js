const child_process = require('child_process')

const {execFile} = child_process

const userInput = '.'

execFile("ls",["-la",userInput],{cwd:'这里填写你想要操作的目录'},(error,stdout)=>{
    console.log(error)
    console.log(stdout)
})

