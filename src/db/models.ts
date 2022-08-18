


import { Model, DataTypes } from "sequelize";
import sequelize from "./config";


export const character = sequelize.define('Character', {

    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    age: DataTypes.NUMBER,
    weight: DataTypes.NUMBER,
    history: DataTypes.STRING,
    moviesOrSeries: DataTypes.ARRAY

});

export const movie = sequelize.define('Movie', {

    id: DataTypes.NUMBER,
    picture: DataTypes.STRING,
    title: DataTypes.STRING,
    creation_date: DataTypes.NUMBER,
    score: DataTypes.NUMBER,
    characters: DataTypes.STRING,

});

export const user = sequelize.define('User', {

    id: DataTypes.STRING,
    username: DataTypes.STRING,
    email_adress: DataTypes.STRING,
    password: DataTypes.STRING,
    creation_date: DataTypes.STRING,

});


// Automatically create all tables
sequelize.sync();