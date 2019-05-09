import AppUtils from '../utils/AppUtils';

export default class SearchResult {
	constructor(id, name, dueOn, description, completedOn) {
		this.id = id;
		this.name = name;
		this.dueOn = AppUtils.toDateString(dueOn);
		this.description = description;
		this.completedOn = AppUtils.toDateString(completedOn);
	}
}