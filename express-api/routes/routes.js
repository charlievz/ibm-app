const pool = require('../data/config');
const has = require('lodash/has');
const isEmpty = require('lodash/isEmpty');
const mysql = require('mysql');

const router = app => {
	app.use(function(_req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
    	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
		res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
		next();
	});

	app.get('/', (_request, response) => {
		response.send({
			message: 'Node.js and Express REST API'
		});
	});

	app.post('/tasks', (request, response) => {
		if (isEmpty(request.body)) {
			pool.query('SELECT * FROM tasks', (error, result) => {
				if (error) throw error;
				response.status(200).send(result);
			});
			return;
		}

		let query = "SELECT * FROM tasks"
		let addedWhere = false;

		if (has(request.body, 'firstDate')) {
			if (!has(request.body, 'secondDate')) {
				query += " WHERE due_on = " + mysql.escape(request.body.firstDate);
			} else {
				query += " WHERE due_on >= " + mysql.escape(request.body.firstDate) + " AND due_on <= " + mysql.escape(request.body.secondDate);
			}
			addedWhere = true;
		}
		if (has(request.body, 'completedOn') && request.body.completedOn == true) {
			query += (addedWhere ? " AND " : " WHERE ") + "completed_on IS NOT NULL";
		}

		pool.query(query, (error, result) => {
			if (error) throw error;
			response.status(200).send(result);
		});

	});

	app.get('/task/:id', (request, response) => {
		const id = request.params.id;
		pool.query('SELECT * FROM tasks WHERE id = ?', id, (error, result) => {
			if (error) throw error;
			response.send(result);
		});
	});

	app.post('/task', (request, response) => {
		if (has(request.body, 'name') && has(request.body, 'description') && has(request.body, 'dueOn')) {
			const {name, description, dueOn} = request.body;
			const epochDueOn = new Date(dueOn).getTime() / 1000;
			let query = `INSERT INTO tasks SET name = ?, description = ?, due_on = ?`;
			pool.query(query, [name, description, epochDueOn], (error, result) => {
				if (error) throw error;
				response.send({message: `Task added with ID: ${result.insertId}`, id: result.insertId, status: 200});
			});
			return;
		}
		response.send({message: `Invalid params`, status: 400});
	});

	app.put('/task/:id', (request, response) => {
		const id = request.params.id;
		if (has(request.body, 'completedOn')) {
				const completedEpoch = request.body.completedOn;
				const query = `UPDATE tasks SET completed_on = ? WHERE id = ?`;
				pool.query(query, [completedEpoch, id], (error, _result) => {
					if (error) throw error;
					response.send({message: 'Task updated successfully', status: 200});
				});
			return;
		}
		response.status(400).send(`Specify completed field`);
	});

	app.delete('/task/:id', (request, response) => {
		const id = request.params.id;
		pool.query('DELETE FROM tasks WHERE id = ?', id, (error, _result) => {
			if (error) throw error;
			response.send({message: `Task with ID: ${id} deleted successfully`, status: 200});
		});
	});
}
module.exports = router;

