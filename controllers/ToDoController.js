const ToDoModel = require("../Models/ToDoModel");

exports.getOneToDo = async function (req, res) {
    try {
      const Todo = await ToDoModel.find({ _id: req.params.id });
      if (Todo.length === 0) {
        return res.json({ Massage: "Todo Not found", data: [] });
      }
      return res.json({ Massage: "done", data: Todo });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ massage: err });
    }
};

exports.getAllToDos = async function (req, res) {
    try {
      const Todos = await ToDoModel.find();
      return res.json({ Massage: "done", data: Todos });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ massage: err });
    }
  };


exports.addToDo = async function (req, res) {
    try {
        const createdTodo = await ToDoModel.create(req.body);
        return res.json({ massage: "Todo Added Succesfully", data: createdTodo });
 
    } catch (err) {
      console.log(err);
      return res.status(400).send({ massage: err });
    }
  };

module.exports.updateToDo = async (req,res) => {
    try{
        const Todo = await ToDoModel.findByIdAndUpdate(req.params.id,req.body);
        if (Todo.length === 0){
            res.json({ Massage: "ToDo Not found", data:[] });
        }
        res.json({ Massage: "ToDo Updated Succefully", status: 200 });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ massage: err });
      }

}
module.exports.deleteToDo = async (req,res) => {
    try{
        await ToDoModel.findByIdAndDelete(req.params.id,req.body);
        res.json({ Massage: "Todo Delete Succefully", status: 200 });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ massage: err });
      }

}
