// import { getClient } from "./utils";

import { getClient } from "./utils";

// async function getUsers() {
//     const client = await getClient();

//     const selectUsersText = 'SELECT * FROM users';
//     const userRes = await client.query(selectUsersText);

//     console.log("Users:");
//     for (let user of userRes.rows) {
//         console.log(`ID: ${user.id}, Email: ${user.email}`);
//     }
// }

// async function getUserFromEmail(email: string) {
//     const client = await getClient();

//     const selectUserText = 'SELECT * FROM users WHERE email = $1';
//     const userRes = await client.query(selectUserText, [email]);

//     console.log("Single User detail:");
//     for (let user of userRes.rows) {
//         console.log(`ID: ${user.id}, Email: ${user.email}`);
//     }
// }

// async function getTodosForUser(userId: number) {
//     const client = await getClient();

//     const selectTodosText = 'SELECT * FROM todos WHERE user_id = $1';
//     const todoRes = await client.query(selectTodosText, [userId]);

//     console.log(`Todos for User ID ${userId}:`);
//     for (let todo of todoRes.rows) {
//         console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, Done: ${todo.done}`);
//     }
// }

// getUsers();

// getUserFromEmail("john.do11e@gmail2.com")

// const userIdToFetch = 1;
// getTodosForUser(userIdToFetch);

async function getAllUsers() {
  const client = await getClient();
  const getAllUserQuery = "SELECT * FROM users";

  const response = await client.query(getAllUserQuery);

  console.log("All users fetched...!", response.rows);
}

getAllUsers();

async function getAllTodos() {
  const client = await getClient();
  const getAllTodos = "SELECT * FROM todos";

  const response = await client.query(getAllTodos);

  console.log("All todos fetched...!", response.rows);
}

getAllTodos();

async function getUserByEmail(email: string) {
  const client = await getClient();

  const getUserByEmailQuery = `SELECT * FROM users WHERE email = $1`;
  const response = await client.query(getUserByEmailQuery, [email]);

  console.log("user for this email is: ", response.rows[0]);
}

getUserByEmail("nitesh@gmail.com");

async function getTodoForUser(userid: number) {
  const client = await getClient();

  const getTodoQuery = `SELECT * FROM todos WHERE user_id = $1`;

  const repsonse = await client.query(getTodoQuery, [userid]);

  console.log("todo list for user: ", repsonse.rows);
}

getTodoForUser(4);
