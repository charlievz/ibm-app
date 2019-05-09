const pool = require('../data/config');
const _ = require('lodash');

const router = app => {
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
    	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
		res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
		next();
	});
	app.get('/', (request, response) => {
		response.send({
			message: 'Node.js and Express REST API'
		});
	});
	app.get('/tasks', (request, response) => {
		if (_.isEmpty(request.query)) {
			pool.query('SELECT * FROM tasks', (error, result) => {
				if (error) throw error;
				response.send(result);
			});
			return; 
		}
		
		let query = "SELECT * FROM tasks"
		let addedWhere = false;

		if (_.has(request.query, 'firstDate')) {
			if (!_.has(request.query, 'secondDate')) {
				query += " WHERE due_on = " + request.query.firstDate;
			} else {
				query += " WHERE due_on >= " + request.query.firstDate + " AND due_on <= " + request.query.secondDate;
			}
			addedWhere = true;
		}
		if (_.has(request.query, 'completed') && request.query.completed != 'false') {
			query += (addedWhere ? " AND " : " WHERE ") + "completed_on IS NOT NULL";
		}
		pool.query(query, (error, result) => {
			if (error) throw error;
			response.send(result);
		});
		 
	});
	app.get('/task/:id', (request, response) => {
		const id = request.params.id;
		pool.query('SELECT * FROM tasks WHERE id = ?', id, (error, result) => {
			if (error) throw error;
			response.send(result);
		});
	});

	// 
	app.post('/task', (request, response) => {
		pool.query('INSERT INTO tasks SET ?', request.body, (error, result) => {
			if (error) throw error;
			response.status(201).send(`Task added with ID: ${result.insertId}`);
		});
	});

	app.put('/task/:id', (request, response) => {
		const id = request.params.id;
		console.log(request.body);
		pool.query('UPDATE tasks SET ? WHERE id = ?', [request.body, id], (error, result) => {
			if (error) throw error;
			response.send('Task updated successfully');
		});
	});
	app.delete('/tasks/:id', (request, response) => {
		const id = request.params.id;
		pool.query('DELETE FROM tasks WHERE id = ?', id, (error, result) => {
			if (error) throw error;
			response.send('Task deleted');
		});
	});
}
module.exports = router;

