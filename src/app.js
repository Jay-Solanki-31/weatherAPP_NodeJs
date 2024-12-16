const expres = require('express');
const path = require('path');
const app = expres();
const poart =  process.env.PORT || 4000;

//public static path
const static_path = path.join(__dirname,"../public");
app.set('view engine','hbs');

app.use(expres.static(static_path));

//routing for links
app.get("",(req,res)=>{
    res.render('index');
});

// app.get("/about",(req,res)=>{
//     res.send('welcome to a AboutUs Page');
// });

app.get("/weather",(req,res)=>{
    res.render('weather');
});

app.get("*",(req,res)=>{
    res.render('404');
});

app.listen(poart);