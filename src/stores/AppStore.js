import { EventEmitter } from 'events';
import _ from 'lodash';

class AppStore extends EventEmitter{
	constructor() {
		super();
		this.state = {
			results: [],
		};
	}

	get results() {
		return this.state.results;
	}
	emitChange() {
		this.emit("CHANGE_EVENT");
	}
	addChangeListener(callback) {
		this.on("CHANGE_EVENT", callback);
	}
	removeChangeListener(callback) {
		this.removeListener("CHANGE_EVENT", callback);
	}
	handleResponse = response => {
		this.state.results = response;
		this.emitChange();
	}

	handleMarkComplete = (task, formattedEpochSeconds) => {
		_.find(this.state.results, {id: task.id}).completedOn = formattedEpochSeconds;
		this.emitChange();
	}

	handleTaskAdded = (taskState) => {
		this.state.results.push(taskState);
		this.emitChange();
	}

	handleDelete = (task) => {
		this.state.results = this.state.results.filter(t => t.id !== task.id);
		this.emitChange();
	}

}
const appStore = new AppStore();
export default appStore;
