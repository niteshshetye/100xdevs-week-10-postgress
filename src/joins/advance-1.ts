// import { getClient } from "../utils";

import { getClient } from "../utils";

// // Get all todos for a give user
// // This needs to ensure that every user comes atleast once
// async function getUserAndTodosWithJoin(userId: number) {
//     const client = await getClient();

//     const joinQuery = `
//         SELECT users.*, todos.title, todos.description, todos.done
//         FROM users
//         LEFT JOIN todos ON users.id = todos.user_id
//         WHERE users.id = $1;
//     `;

//     const res = await client.query(joinQuery, [userId]);
//     const results = res.rows;

//     console.log("User and Todos:", results);
// }

// getUserAndTodosWithJoin(1)
async function getUserAndTodosWithJoin(userid: number) {
  const client = await getClient();

  const joinQuery = `
        SELECT users.id, users.email, todos.title, todos.discription, todos.done
        FROM users
        LEFT JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1;
    `;

  const response = await client.query(joinQuery, [userid]);

  console.log(
    `Details of todos for giver user with id: ${userid}`,
    response.rows
  );
}

getUserAndTodosWithJoin(1);
