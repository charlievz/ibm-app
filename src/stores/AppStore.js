import { EventEmitter } from 'events';
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

}
const appStore = new AppStore();
export default appStore;
