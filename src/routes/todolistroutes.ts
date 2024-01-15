import {Router} from 'express'
const router = Router();

import * as ListController from './todolistcontrollers'

router.get('/tareas', ListController.getTareas);

router.get('/tareas/:id', ListController.getTarea);

router.post('/tareas', ListController.createTarea);

router.delete('/tareas/:id', ListController.deleteTarea);

router.put('/tareas/:id', ListController.updateTarea);




export default router;