// import { getClient } from "./utils";

import { getClient } from "./utils";

// async function createTable() {
//     const createUserTableQuery = `
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL
//         );
//     `;

//     const client = await getClient();

//     await client.query(createUserTableQuery);

//     const createTodosQuery = `
//         CREATE TABLE todos (
//             id SERIAL PRIMARY KEY,
//             title TEXT NOT NULL,
//             description TEXT,
//             user_id INTEGER REFERENCES users(id),
//             done BOOLEAN DEFAULT FALSE
//         );
//     `;

//     await client.query(createTodosQuery);

//     console.log("Table created successfully!");
// }

// createTable();

async function createTable() {
  const createUsersTableQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL
        );
    `;

  const createTodoTableQuery = `
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            discription TEXT NOT NULL,
            user_id INT REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        );
    `;

  const client = await getClient();

  await client.query(createUsersTableQuery);
  await client.query(createTodoTableQuery);

  console.log("Table created successfully...!");
}

createTable();
