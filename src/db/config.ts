

// Include Sequelize module
import {Sequelize} from 'sequelize';
  
// Creating new Object of Sequelize
const sequelize = new Sequelize(
    'sqlite::memory:',
    {
        dialect: 'sqlite',
        storage: 'src/db/database/disney-api.sqlite'

    }
)

  
  
export default sequelize;