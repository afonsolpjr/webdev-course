import bodyParser from 'body-parser';
import express from 'express';
/*
some features to add
-Create "most recent posts" page
- Add responsiveness by shifting lateral menu to bottom, on mobile devices;
- change the post content input textbox to nes-textarea or <textarea>....
- use nes.css from node, instead from cdn
*/
class Blogpost{
    static number_of_posts = 0;
    constructor(title,content,data,hora){
        this.id= ++Blogpost.number_of_posts;
        this.title = title;
        this.content = content;
        this.data = data;
        this.hora = hora;
    }
}

const port = 3000;
const app = express();
var posts = [];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

// Initializing server and 
app.listen(port,() => {
    console.log("Servidor rodando na porta " + port + ".");
})

app.get('/',(req,res) => {
    res.render("index.ejs",{posts});
})


app.post("/submit",(req,res) => {
    let now = new Date();
    let new_post = new Blogpost(req.body.post_title,req.body.post_content,now.toLocaleDateString(),now.toLocaleTimeString());
    posts.push(new_post);
    res.render("post.ejs",{post:new_post,posts});

})

app.get("/post", (req,res) =>{
    
    let post = getPostById(req.query.id);
    res.render("post.ejs",{post,posts});
})

app.post("/delete",(req,res)=>{
    deletePostById(req.query.id);
    res.render("index.ejs",{posts});
})

app.get("/edit",(req,res) => {
    let post = getPostById(req.query.id);
    res.render("edit.ejs",{post,posts});
})
app.post("/submit_edit",(req,res)=>{
    let post = getPostById(req.query.id);
    let now = new Date();

    post.title = req.body.post_title;
    post.content = req.body.post_content;
    post.data = now.toLocaleDateString();
    post.hora = now.toLocaleTimeString();
    res.redirect("/post?id="+post.id);

})


function getPostById(id){
    for(let i =0;i<posts.length;i++){
        console.log("\t\texpressao: " + id + '==' + posts[i].id + '?\n' + (posts[i].id==id) );
        if(posts[i].id==id){
            console.log("\t achei!");
            return posts[i];
        }
    }
}

function deletePostById(id){
    for(let i =0;i<posts.length;i++){
        if(posts[i].id==id)
            return posts.splice(i,1);
    }
}