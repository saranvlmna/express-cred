const DataTypes = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("directions", "postgres", "vlmna", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
});

const User = sequelize.define("user", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.STRING,
  },
  place: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
});

sequelize.sync();

export { User };
