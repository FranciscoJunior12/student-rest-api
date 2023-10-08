import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
//router.get('/', userController.index);
//router.get('/:id', userController.show);


router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;


/*

Index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> = POST
delete -> apaga um  usuario         =DELETE 
show -> mostra um usuario -> GET
upadate -> actualiza um usuario ->PACTH OU PUT
*/