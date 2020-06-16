const fs = require('fs')
// 向可写流中写入数据一百万次。
// 留意背压（back-pressure）。
function writeOneMillionTimes(writer, data) {
    let i = 1000000;
    write();
    function write() {
        //可以写入
        let ok = true;
        do {
            i--;
            if (i === 0) {
                // 最后一次写入。
                writer.write(data);
            } else {
                // 检查是否可以继续写入。
                // 不要传入回调，因为写入还没有结束。
                ok = writer.write(data);
                if(ok === false){
                    console.log('不能再写了');
                }
            }
            //如果ok不是true，我就去执行drain
        } while (i > 0 && ok);
        if (i > 0) {
            // 被提前中止。
            // 当触发 'drain' 事件时继续写入。
            writer.once('drain', ()=>{
                console.log('干涸了');
                write
            });
        }
    }
}

const write = fs.createWriteStream('./drain.txt')

writeOneMillionTimes(write,'hello world')

