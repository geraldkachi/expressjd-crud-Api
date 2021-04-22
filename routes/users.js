// import express, { Router } from "express"
import express from "express";


import { getUsers, getUserParams, createUser, deleteUser, updateUser } from "../controllers/users.js";


const router = express.Router();

// all routes are starting with lash /users



router.get("/", getUsers);


router.get("/:id", getUserParams) // getUser


router.post("/", createUser);


router.delete('/:id', deleteUser)


router.patch("/:id", updateUser) 


export default router;













///////////////////////////////////////////////////


// // import express, { Router } from "express"
// import express from "express";
// import { v4 as uuidv4 } from "uuid";

// const router = express.Router();

// // all routes are starting with lash /users

// let users = [
//   // {
//   //     firstname: "kachi",
//   //     lastname: "Ikoojo",
//   //     age: 25
//   // },
//   // {
//   //     firstname: "Adimora",
//   //     lastname: "Augustine",
//   //     age: 21
//   // },
//   // {
//   //     firstname: "Marceloranso",
//   //     lastname: "chinasa",
//   //     age: 23
//   // },
// ];

// router.get("/", (req, res) => {
//   res.send(users);
//   // console.log(users)
// });

// router.post("/", (req, res) => {
//   // console.log('POST ROUTE REACHED')
//   const user = req.body;

//   const userId = uuidv4();

//   const userwithId = { ...user, id: userId };
//   // const userwithId = {...user,  id: uuidv4} //  OR this

//   // console.log(req.body)

//   users.push(userwithId);
//   // users.push(user)

//   res.send(`User with the name ${user.firstname} added  to the database!`);
//   // res.send("POST ROUTE REACHED")
//   // send to the client side
// });

// // /user/2 req.params { id: 2}

// router.get("/:id", (req, res) => {
//   //   const id = req.params.id //  or
//   const { id } = req.params;

//   const foundUseer = users.find((user) => user.id === id)

//   res.send(foundUseer);
// //   res.send(req.params);
// //   res.send("GET ID ROUTE");
// });


// router.delete('/:id', (req, res) => {
//     const {id} = req.params

//     users = users.filter((user) => user.id ==! id)

//     res.send(`User with the id ${id} deleted from the database`)
// })

// // router.put() put is used when you want to completely overide something
// // if you want to completly change everything you use a put method


// //  but is you want to apply a little modification like to edit the age or the latname you use patch to update the data
// router.patch("/:id", (req, res)  => {
//     const {id} = req.params

//     const { firstname, lastname, age} = req.body

//     const userToBeUpdated = users.find(user => user.id === id)

//     if (firstname) userToBeUpdated.firstname = firstname
//     if (lastname) userToBeUpdated.lastname = lastname
//     if (age) userToBeUpdated.age = age

//     res.send(`User with the ${id} has been updated`)
// }) 

// export default router;
