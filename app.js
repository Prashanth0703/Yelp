var express = require('express');
var app=express();
var bodyParser=require('body-parser');
var campgrounds=[
		{name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
		{name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        
	]
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.get("/",(req,res) =>{
	res.render('landing')
})

app.get("/campgrounds",(req,res) =>{
	res.render("campgrounds",{campgrounds:campgrounds});
})

app.post("/campgrounds",(req,res)=>{
	var name=req.body.name;
	var image=req.body.image;
	var newCampground={name:name,image:image}
	campgrounds.push(newCampground);
	res.redirect("/campgrounds")
})

app.get("/campgrounds/new",(req,res)=>{
	res.render("new");
})

app.listen(3000, () =>{
	console.log("server listening");
})
