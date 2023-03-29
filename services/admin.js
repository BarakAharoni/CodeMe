const Admin = require('../models/admin');
const Developer = require("../models/developer");

const createAdmin = async (
    username,
    password,
    picture
) => {
    const admin = new Admin({
        username: username,
        password: password,
        picture: picture
    });

    return await admin.save();
};

const getAdmins = async () => {
    return await Admin.find({});
};
const getAdminByUsername = async (username) => {
    return await Admin.findOne({username: username});
};

const updateAdmin = async (username_old,username_new, password_new, picture_new) => {
    const admin = await getAdminByUsername(username_old);
    if (!admin)
        return null;
    admin.username = username_new;
    admin.password = password_new;
    admin.picture = picture_new;
    return await admin.save();
};

const deleteAdmin = async (id) => {
    const admin = await getAdminByUsername(id);
    if (!admin)
        return null;

    await admin.remove();
    return admin;
};



module.exports = {
    deleteAdmin,
    createAdmin,
    getAdminByUsername,
    updateAdmin,
    getAdmins,
}