import express from "express";
const router = express.Router();

let users = [
  { id: 1, name: "Tom", gender: "Male", bio: "Loves to paint" },
  { id: 2, name: "Jerry", gender: "Male", bio: "Loves sleeping" },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const getUser = users.find((user) => user.id === Number(id));
  if (!getUser) {
    return res.status(404).send("User not found");
  } else {
    return res.json(getUser);
  }
});

router.delete("/delete/:id",(req,res)=>{
  const { id } = req.params;
  const userIndex = users.findIndex((user)=>user.id===Number(id));
  if (userIndex===-1) {
    return res.status(404).send("User not found");
  } else {
    const deleteduser=users[userIndex];
    users=[...users.slice(0,userIndex),...users.slice(userIndex+1)];
    return res.json(deleteduser);
  }
})

export default router;
