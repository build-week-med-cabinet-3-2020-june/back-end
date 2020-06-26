# back-end

Test Score for Web - Unit 4
Name	Rodrigo Sibaja
Email	rodrigo-sibaja@lambdastudents.com
Test status	COMPLETED
Test completed at	Sat Jun 20 2020 17:01:56 GMT+0000 (Coordinated Universal Time)
Your test score	11
Test max score	17
Duration in mins	40
Your score	Test max score	Solve time	Question title	Description
0	1	1.90	fswTimeoutResponse	What would be the response when making a request to localhost:8000/ ? *As always, read code carefully!* ```javascript const express = require("express"); const server = express(); server.use(function(req, res, next) { req.name = "John Doe"; }); server.get("/", (req, res) => { res.json({ name: req.name }); }); server.listen(8000); ```
1	1	1.22	fswCreateExpressRouter	Fill in the missing code (`_____`) required to create an express router. ```js const express = require('express'); const router = _____; ```
1	1	0.72	fswSortResults	Fill in the missing code (`______`) required to sort results by salary from largest to smallest. ```SQL select first_name, last_name, salary from employees ______; ```
0	1	0.85	fswDeleteRecordResetKey	Fill in the missing code (`_____`) required to delete all records in the accounts table and reset it's primary key each time the function is called. ```js exports.seed = function(knex, Promise) { return knex('accounts').______() ```
1	1	1.54	fswReturnRecords	Fill in the missing code (`______`) to return up to 10 records from the 'products' table. ```sql select * from products ______; ```
1	1	1.80	fswTableConstraints	Which of the following is a table constraint?
0	1	3.52	fswPurposeOfPool	Given the following development configuration in a knexfile.js, which best describes the purpose of the `pool` property? ```js development: { client: "sqlite3", connection: { filename: "./database/car-dealer.db3", }, useNullAsDefault: true, migrations: { directory: "./database/migrations", }, seeds: { directory: "./database/seeds", }, pool: { afterCreate: (conn, done) => { conn.run("PRAGMA foreign_keys = ON", done); }, }, }, ```
1	1	2.80	fswNextInMiddleware	What is the use of the `next` parameter in this middleware function? ``` function (req, res, next) { // code } ```
1	1	0.14	fswPasswordHandling	What is the proper way to store a password in a database for authentication purposes?
1	1	1.77	fswCookiesInAuth	Cookies are mostly used for ____________________.
1	1	2.28	fswStoreCookieHeader	The server can ask the client to store cookies by sending a ________ header
0	1	4.10	fswLoggedUsersServerSideClientSide	With sessions the _____ is responsible for keeping track of logged in users and with JSON web tokens the _____ is responsible.
0	1	7.44	fswEnvironmentPortPurpose	What is the purpose of the following code? `const jwtKey = processs.env.JWT_KEY;`
1	1	2.04	fswDataValidationWithNode	Data validation should occur ______ calling the database
1	1	2.80	fswChangeNodeTestingEnvironment	Which of the following most closely represents the purpose of the following code? ``` "jest": { "testEnvironment": "node" } ```
0	1	2.58	fswSortByEndpoints	Fill in the missing code (`______`) to pass a `sortby` query string parameter to a `hobbits` endpoint with a value `name` ``` localhost:8000/hobbits______ ```
1	1	2.07	fswDeletingIds	Given the following migration: ```js return knex.schema.createTable('employees', tbl => { tbl.increments(); tbl.integer('departent_id') .unsigned() .notNullable() .references('id') .inTable('departments') .onUpdate('CASCADE') .onDelete('RESTRICT'); }) ``` If there are employee records where the `department_id` has the value 123, what happens if we try to delete the `department` with the `id` 123?