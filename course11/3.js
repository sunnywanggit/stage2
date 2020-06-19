const child_process = require('child_process')

const {execFile} = child_process

const userInput = '.'

<<<<<<< HEAD
//第三个参数是options
=======
>>>>>>> 84b99aa68fd287bb9bb350b4f55f0c76ee41f873
execFile("ls",["-la",userInput],{cwd:'这里填写你想要操作的目录'},(error,stdout)=>{
    console.log(error)
    console.log(stdout)
})

