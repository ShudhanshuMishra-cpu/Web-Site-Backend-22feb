const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Blog = require("./models/blogModal");
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://avyaanmanagementindia:JAUMuI0885QNGowH@cluster0.1mmz1qs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getBlogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.post("/postAvyaan123", async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
  });
  await blog.save();
  res.json(blog);
});

app.get("/getBlog/:id", async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  res.json(blog);
});

// rishabh2560
// XJUHAmrOAzVUrvJD;

// const port = 5000;
// app.listen(port);
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
