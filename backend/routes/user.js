const router = require("express").Router();
const userController = require('../controllers/userController')
let User = require('../models/User');


router.post('/add',userController.CreateUser);
router.get('/all',userController.GetAllUsers);
router.get('/nic/:nic',userController.GetUserbyNic);
router.put('/update/:id',userController.UpdateUser);
router.delete('/delete/:id',userController.DeleteUser);



module.exports = router;
