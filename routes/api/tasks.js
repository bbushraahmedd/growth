import express from "express";
const router = express.Router();
import tasksCtrl from '../../controllers/tasks.js';

router.post('/', tasksCtrl.create);
router.get('/', tasksCtrl.index);
router.delete('/:id', tasksCtrl.deleteTask);
export default router;