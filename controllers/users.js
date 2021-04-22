import { v4 as uuidv4 } from "uuid";

let users = [
  // {
  //     firstname: "kachi",
  //     lastname: "Ikoojo",
  //     age: 25
  // },
  // {
  //     firstname: "Adimora",
  //     lastname: "Augustine",
  //     age: 21
  // },
  // {
  //     firstname: "Marceloranso",
  //     lastname: "chinasa",
  //     age: 23
  // },
];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUserParams = (req, res) => {
  //   const id = req.params.id //  or
  const { id } = req.params;

  const foundUseer = users.find((user) => user.id === id);

  res.send(foundUseer);
  //   res.send(req.params);
  //   res.send("GET ID ROUTE");
};

export const createUser = (req, res) => {
  // console.log('POST ROUTE REACHED')
  const user = req.body;

  const userId = uuidv4();

  const userwithId = { ...user, id: userId };
  // const userwithId = {...user,  id: uuidv4} //  OR this

  users.push(userwithId);

  res.send(`User with the name ${user.firstname} added  to the database!`);

  // send to the client side
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id == !id);

  res.send(`User with the id ${id} deleted from the database`);
};

// Update User
export const updateUser = (req, res) => {
  const { id } = req.params;

  const { firstname, lastname, age } = req.body;

  const userToBeUpdated = users.find((user) => user.id === id);

  if (firstname) userToBeUpdated.firstname = firstname;
  if (lastname) userToBeUpdated.lastname = lastname;
  if (age) userToBeUpdated.age = age;

  res.send(`User with the ${id} has been updated`);
  // router.put() put is used when you want to completely overide something
  // if you want to completly change everything you use a put method

  //  but is you want to apply a little modification like to edit the age or the latname you use patch to update the data
};
