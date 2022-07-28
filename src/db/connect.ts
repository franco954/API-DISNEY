

import sequelize from "./config";

const auth = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        sequelize.close()
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


export default auth;
