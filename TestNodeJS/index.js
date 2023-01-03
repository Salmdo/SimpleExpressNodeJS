const express = require('express')
//Module to get the specific path to this file
const path = require('path')


const app = express()
//appp.use is used to mount the specified middleware function(s) at the specific path to the application
app.use(
    //express.static is a packaged shipped with Express that helps us serve static files
    // express.static(‘ public’) => specify that any request that ask for assets should get it from the ‘ public ’ directory.
    express.static('public')
)

//start listening on the server by using app.listen
app.listen(3000, ()=> 
    console.log("My Blog Here")\
)

app.get('/',(req,res)=>{ 
    //return a JSON respond back to the browser with res.json
    res.sendFile(
        path.resolve(__dirname, "index.html")
    )
})

//Routing: where mapping requests to specific handlers depending on a URL
app.get('/about',(req,res)=>{ 
    res.json({ name: 'Greg Lim about' })
})

app.get('/contact',(req,res)=>{
    res.sendFile(
        //path.resolve() gets the full absolute path which changes based on different Operating Systems(OS is Windows, Mac or Linux)
        //__dirname returns the folder path of the current excuting file
        path.resolve(__dirname,'contact.html')
    )
})