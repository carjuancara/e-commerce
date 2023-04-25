const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Usuario", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        isEmail: true, 
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8,12],
      }
    },
    favoritos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    carrito: {
      type: DataTypes.TEXT,
      allowNull:true
    }

  });
};
