const express = require("express");

const app = express(); //
const port = 5000; // this port will be for node

app.listen(port, (req, res) => {
  console.log("listening to port : ", port);
});

const users = [
  { id: 1, name: "shova", email: "shova@gmail.com" },
  { id: 2, name: "safa", email: "shova@gmail.com" },
  { id: 3, name: "fava", email: "shova@gmail.com" },
  { id: 4, name: "sttva", email: "shova@gmail.com" },
];

//get api
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((u) =>
      u.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
// single one - dynamic api

//post api
