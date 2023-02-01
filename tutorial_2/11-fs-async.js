const {readFile, writeFile} = require('fs')


readFile('./content/first.txt','utf8', (err, result)=>{

    if(err) {
        console.log(err)
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=> {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/resultasync.txt', `here is async result ${first}, ${second}`, 
        (err, result)=>{
           if(err){
            console.log(err)}
            console.log(result)
            })
    })
})

