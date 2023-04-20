// const express = require("express");

// const sqlDbconnect = require("./dbconnect");

// const Router = express.Router();

// // Router.get("/",(req, res)=>{
// //     const userData =[{name:"Neha Mondal",email:"neha1624@gmail.com",age:23},
// //                     { name :"Sanket",email:"sanketsinha61@gmail.com",age:23}
// //                 ];
// //                 res.send(userData);
// // });

// // Router.get("/api/card_details",(req,res)=>{
// //     sqlDbconnect.query("select * from payment_details",(err,rows)=>{
// //         if(!err)
// //         {
// //             res.send(rows);
// //         } else {
// //             console.log(err);
// //         }
// //     });
// // });

// // Router.get("/api/status",(req ,res)=>{
// //     sqlDbconnect.query("select * from payment_status",(err,rows)=>{
// //         if(!err)
// //         {
// //             res.send(rows);
// //         } else{
// //             console.log(err)
// //         }
// //     });
// // });


// Router.post("/api/card_details",(req, res)=>{
//     const cardHolder= req.body.cardHolder;
//     const cardNumber = req.body.cardNumber;
//     const CVV = req.body.CVV;
//     const ExpiryDate= req.body.ExpiryDate;
   
//     //const accept= req.body.accept;
//     //const status= 1;  

//     var sql=`INSERT INTO payment_details (CardHolder Name, Card Number,CVV, Expiry Date)
//     VALUES("${cardHolder}","${cardNumber}", "${CVV}" ,"${ExpiryDate}")`;
    
//     sqlDbconnect.query(sql, (err, result)=>{
//         if(!err)
//         {
//          res.status(200).json("Details Saved Successfully");
//         } else{
//             console.log(err);
//         }

//     });

// });

// module.exports = Router;