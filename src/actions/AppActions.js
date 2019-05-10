import AppUtils from '../utils/AppUtils';
import appStore from '../stores/AppStore';
import { SERVICE_URL } from '../constants/AppConstants';

const AppActions = {

	handleSearch(searchState) {
		const {range, view, firstDate, secondDate} = searchState;
		const url = `${SERVICE_URL}/tasks`;
		const bodyParams = {};
		if (range === 'on') {
			bodyParams.firstDate = AppUtils.epochSecondsForDateString(firstDate);
		} else if (range === 'between') {
			bodyParams.firstDate = AppUtils.epochSecondsForDateString(firstDate);
			bodyParams.secondDate = AppUtils.epochSecondsForDateString(secondDate);
		}
		if (view === 'completed') {
			bodyParams.completedOn = true;
		}
		const param = {
			body: JSON.stringify(bodyParams),
			headers: {
				'Content-Type': 'application/json',
			},
			method: "POST",
		};
		fetch(url, param).then(response => {
			return response.json();
		}).then(json => {
			const results = AppUtils.processSearchResponse(json);
			appStore.handleResponse(results);
		}).catch(error => {
			console.error(error);
		});
	},
	createTask(taskState) {
		const url = `${SERVICE_URL}/task`;
		const param = {
			body: JSON.stringify(taskState),
			headers: {
				'Content-Type': 'application/json',
			},
			method: "POST",
		};
		fetch(url, param).then(response => {
			return response.json();
		}).then(json => {
			if (json.status === 200) {
				appStore.handleTaskAdded(Object.assign({}, taskState, {id: json.id}));
			}
		}).catch(error=> {
			console.error(error);
		});
	},
	markComplete(task) {
		const currentEpochSeconds = (new Date()).getTime() / 1000;
		const dateString = AppUtils.toDateString(currentEpochSeconds);
		const formattedEpochSeconds = AppUtils.epochSecondsForDateString(dateString);

		const url = `${SERVICE_URL}/task/${task.id}`;

		const data = {
			completedOn: formattedEpochSeconds,
		}
		const param = {
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
			method: "PUT",
		};
		fetch(url, param).then(response => {
			return response.json();
		}).then(json => {
			if (json.status === 200) {
				appStore.handleMarkComplete(task, dateString);
			}
		}).catch(error=> {
			console.error(error);
		});
	},
	removeTask(task) {
		const url = `${SERVICE_URL}/task/${task.id}`;
		const param = {
			method: "DELETE",
		};
		fetch(url, param).then(response => {
			return response.json();
		}).then(json => {
			if (json.status === 200) {
				appStore.handleDelete(task);
			}
		}).catch(error=> {
			console.error(error);
		});
	},

};

export default AppActions;