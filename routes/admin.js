const express = require('express');
var router = express.Router();

const AdminDeveloper = require('../controllers/adminDev.js');

router
    .route('/')
    .get(AdminDeveloper.getPageHome)
    .delete(AdminDeveloper.deleteDeveloper);

router
    .route('/developers')
    .get(AdminDeveloper.getPageHome)
    .delete(AdminDeveloper.deleteDeveloper);

router
    .route('/register')
    .get(AdminDeveloper.getFormRegister)
    .post(AdminDeveloper.createAdmin);

/*router
    .route('/update')
    .get(AdminDeveloper.updateDeveloperPage)
    .post(AdminDeveloper.updateDeveloper);*/

router
    .route('/delete')
    .post(AdminDeveloper.deleteDeveloper)

/*router
    .route('/:id')
    .get(AdminDeveloper.getAdmin)
    .put(AdminDeveloper.getAdmin)
    .delete(AdminDeveloper.deleteAdmin);*/

module.exports = router;