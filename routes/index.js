var express = require('express');
var router = express.Router();
const userModel=require('./users')
const postModel=require('./post');
const passport = require('passport');
const uploads=require("./multer");

const localStrategy=require("passport-local");
const Post = require('./post');
passport.use(new localStrategy(userModel.authenticate()));



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/fileupload', isloggedIn,uploads.single("image") , async function(req, res, next) {
//  res.send("Upload sucessfully")
const user=await userModel.findOne({username:req.session.passport.user});
user.profileImage=req.file.filename;
await user.save();
res.redirect("/profile");
});



router.get('/profile', isloggedIn, async function(req, res, next) {
   const user =await userModel.findOne({
    username:req.session.passport.user
   })
   .populate("posts")
   console.log(user);
  //  console.log(user);
  res.render('profile',{user});
});

// router.get('/feed', function(req, res, next) {
//   res.render("feed");
// });

  //Show Route
  router.get("/profile/:id", async (req, res) => {
    let { id } = req.params;
    const postt  = await Post.findById(id);
    res.render("../views/show.ejs",{postt});
  });


router.get('/feed', isloggedIn, async function(req, res, next) {
   const user =await userModel.findOne({
    username:req.session.passport.user
   })
   const posts=await postModel.find().populate("user")

  //  console.log(user);
  res.render('feed',{user,posts});
});
// router.get('/feed', function(req, res, next) {
//   res.render("feed");
// });

router.post('/upload', isloggedIn, uploads.single('file'), async function(req, res, next) {
  if(!req.file){
    return res.status(404).send("no file uploads")
  }
  const user=await userModel.findOne({username:req.session.passport.user});
  const post=await postModel.create({
    Image:req.file.filename,
    ImageText:req.body.filecaption,
    user:user._id
  });

user.posts.push(post._id);
await user.save();
  res.redirect("/profile");
  // res.send("file uploads succesfully");
 // Jo file uploads hui hai use save karo as a post and uska postid user and post ko userid do
});

router.get('/login', function(req, res, next) {
  // console.log(req.flash("error"));
  res.render('login',{error:req.flash("error")});
});

router.post("/register",(req,res)=>{
  const userData=new userModel({
    username:req.body.username,
   email:req.body.email,
   fullname:req.body.fullname,

  })
  userModel.register(userData,req.body.password)
  .then (function(){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/profile")
    })

  })
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash:true
}), function(req, res) {
  // This function is not necessary in this context
});

    router.get("/logout",function(req,res){
      req.logout(function(err){
        if(err){
          return next(err);
        }
        res.redirect("/login")
      })
    })


 function isloggedIn(req,res,next){
  if(req.isAuthenticated())return next();
  res.redirect("/")
 }







module.exports = router;




// router.get('/createUser', async function(req, res, next) {
//   const createuser= await userModel.create({
//    username:"tushar",
//    password:"tushar",
//    posts: [],
//    email:"tushar@gmail.com",
//    fullname: "Tushar raj",
//   })
//   res.send(createuser)
//  });
 
 
//  router.get('/createPost', async function(req, res, next) {
//   const createPost= await postModel.create({
//    postText:"Second post",
//    user:"65ac3799dbceef3c0d8ffdb6"
//   })
//   let user=await userModel.findOne({_id:"65ac3799dbceef3c0d8ffdb6"})
//   user.posts.push(createPost._id);
//   await user.save();
//   res.send("done");
//  //  res.send(createPost)
//  });
 
 
//  router.get('/allUserPosts',async (req,res,next)=>{
//    let users=await userModel
//    .findOne({_id:"65ac3799dbceef3c0d8ffdb6"})
//    .populate('posts'); //It give real Data 
//    res.send(users)
//  })