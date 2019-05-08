import SearchResult from './SearchResult';
const AppUtils = {
	processResponse: response => {
		const items = [];
		response.items.forEach(item => {
			items.push(new SearchResult(item.name, item.owner.login, item.svn_url, item.description, item.stargazers_count, item.license.name));
		});
		return items;
	}
}

export default AppUtils;