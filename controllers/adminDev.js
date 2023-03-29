const developerService = require('../services/developer');
const adminService = require('../services/admin');

const deleteDeveloper = async (req, res) => {
    return await developerService.deleteDeveloper(req.query.id);
};

const getPageHome = async (req, res) => {
    res.redirect('/');
};

const getFormRegister = async (req, res) => {

    const admins = await adminService.getAdmins();
    res.render("../views/adminRegister.ejs", {admins: admins});
    //res.json(developer);
};

const createAdmin = async (req,res) => {
    const newAdmin = await adminService.createAdmin( req.body.username, req.body.password, req.body.picture);
    req.session.username = req.body.username;
    req.session.type = "admin";
    res.json(newAdmin);
}


module.exports = {
    getPageHome,
    deleteDeveloper,
    getFormRegister,
    createAdmin,
};