const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require("./db/user");
const Product = require('./db/Product')
const Comment = require('./db/comment');
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
})

app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user);
        }
        else {
            res.send({ result: "NO user found}" });
        }
    }
    else {
        res.send("IN sufficient data");
    }
})

app.post("/addproduct", async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})
app.get("/products", async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products);
    } else {
        res.send({ result: "NO product found" })
    }
})

// app.route("/product/:id")
//     .get(function (req, res) {
//         res.send(req.params.id);
//         Product.findById(req.params.id, function (err, foundProduct) {
//             console.log(foundProduct);
//             // if (err) {
//             //     console.log(err);
//             //     res.send({response: "Product not found!"});
//             // } else {
//             //     if (foundProduct) {
//             //         res.send(foundProduct);
//             //     };
//             // };
//         });
//     });

app.post("/postcomment", async (req, res) => {
    console.log(req.body.id);
    let productId = {_id : req.body.id};
    let comment = {comment: [req.body.comment]};

    let newProduct = await Product.findOneAndUpdate(productId, comment);



    // let doc = await Character.findOneAndUpdate(filter, update);
    // let user = new Comment(req.body);

    let result = await Product.save();
    res.send(result);
})

app.listen(5500);