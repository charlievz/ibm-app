import AppUtils from '../utils/AppUtils';
import appStore from '../stores/AppStore';
import { SERVICE_URL } from '../constants/AppConstants';
const AppActions = {
	handleSearch(searchState) {
		const {range, view, firstDate, secondDate} = searchState;
		let paramsAdded = false;
		let url = `${SERVICE_URL}/tasks?`;
		if (range === 'on') {
			let epoch = new Date(firstDate).getTime() / 1000;
			url += "firstDate="+epoch;
			paramsAdded = true;
		} else if (range === 'between') {
			let epochFirstDate = new Date(firstDate).getTime() / 1000;
			let epochSecondDate = new Date(secondDate).getTime() / 1000;
			url += "firstDate=" + epochFirstDate + "&secondDate=" + epochSecondDate;
			paramsAdded = true;
		}
		if (view === 'completed') {
			url += (paramsAdded ? "&" : "") + "completed=true";
		}
		fetch(url).then(response=>{
			return response.json();
		}).then(json=> {
			const results = AppUtils.processSearchResponse(json);
			appStore.handleResponse(results); // despite my efforts to resolve issue, the flux dispatcher wasn't working for me
			console.log(results);
		}).catch(error => {
			console.log(error);
		});
	},
	createTask(taskState) {
		let url = `${SERVICE_URL}/task`;
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
			console.log(error);
		});
	},
	markComplete(task) {
		const currentEpochSeconds = (new Date()).getTime() / 1000;
		const dateString = AppUtils.toDateString(currentEpochSeconds);
		const formattedEpochSeconds = new Date(dateString).getTime() / 1000;

		let url = `${SERVICE_URL}/task/${task.id}`;

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
			console.log(error);
		});
	}

};

export default AppActions;