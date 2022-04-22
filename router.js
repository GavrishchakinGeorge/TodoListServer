import Router from 'express';
import PostController from "./PostController.js";

const router = new Router();

router.post('/createTask', PostController.create);
router.get('/getAllTasks', PostController.getAll);
router.put('/putAlltasks', PostController.update);
router.delete('/deleteOneTask', PostController.delete);
router.delete('/deleteAll', PostController.deleteAll);

export default router;
