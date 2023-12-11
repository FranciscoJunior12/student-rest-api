import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', AlunoController.index);
router.get('/:id', AlunoController.show);
router.post('/', AlunoController.store);
router.delete('/:id', AlunoController.delete);
router.put('/:id', AlunoController.update);

export default router;
