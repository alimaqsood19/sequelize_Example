const User = require('./user');
const Landscape = require('./landscape');

User.hasOne(Landscape, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

//belongsTo ---> Table ---> foreign key defined 
Landscape.belongsTo(User, {
    foreignKey: 'user_id'
});

// 1:1 association between User : Landscape
module.exports = { User, Landscape } 