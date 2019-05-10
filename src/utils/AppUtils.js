import SearchResult from './SearchResult';
const AppUtils = {
	processSearchResponse: response => {
		const items = [];
		response.forEach(item => {
			items.push(new SearchResult(item.id, item.name, item.due_on, item.description, item.completed_on));
		});
		return items;
	},
	toDateString: epochSeconds => {
		const date = new Date(1970, 0, 1); // Epoch
		if (!epochSeconds || epochSeconds < 0) {
			return '';
		}
    	date.setSeconds(epochSeconds);
    	return `${date.getFullYear()}-${AppUtils.pad(date.getMonth()+1, 2)}-${AppUtils.pad(date.getDate(), 2)}`;
	},
	pad: (num, size) => {
    	var s = num+"";
    	while (s.length < size) s = "0" + s;
    	return s;
	},
	testDateString: (string) => {
		const re = /^\d{4}-\d{2}-\d{2}$/;
		return !re.test(string);
	},
}

export default AppUtils;