const {Router} = require('express');
// const { getToDo , addToDo, updateToDo, deleteToDo, getAllToDo } = require('../controllers/ToDoController');
const ToDoController = require('../controllers/ToDoController')
const router = Router()

router.get('/api/todo/:id',ToDoController. getOneToDo )
router.get('/api/todo',ToDoController. getAllToDos )
router.post('/api/todo',ToDoController.addToDo )
router.put("/api/todo/:id",ToDoController.updateToDo);
router.delete("/api/todo/:id",ToDoController.deleteToDo);



module.exports = router;
