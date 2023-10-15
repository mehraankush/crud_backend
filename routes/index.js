import express from 'express';
const router = express.Router();

import { AddUser, getAllUsers,EditUser , UpdateUser, deleteUser} from '../controler/usercontroler.js';

router.get('/',(req,res)=>{
     res.send('Welcome to Express.js');
})

router.post('/add', AddUser);
router.get('/allusers', getAllUsers);
router.get('/edit/:id',EditUser);
router.post('/edit/:id',UpdateUser);
router.delete('/delete/:id',deleteUser);

export default router;