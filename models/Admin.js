// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');

// class Admin extends Model {
//     checkPassword(loginPW) {
//         return bcrypt.compareSync(loginPW, this.password);
//     };
// };

// Admin.init({
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//     },
//     hooks: {
//         async beforeCreate(newUserData) {
//             newUserData.password = await bcrypt.hash(newUserData.password, 10);
//             return newUserData;
//         },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'admin',
// });

// module.exports = Admin;
