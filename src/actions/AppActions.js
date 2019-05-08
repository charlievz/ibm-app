import AppUtils from '../utils/AppUtils';
import appStore from '../stores/AppStore';
const AppActions = {
  handleSearch(searchState) {
    const {license, stars, text, includeForked} = searchState;
    let url = `https://api.github.com/search/repositories?q=${encodeURI(text)}+license:${encodeURI(license)}+stars:${stars}`;
    if (includeForked) {
    	url += 'fork:true';
    }
    fetch(url).then(response=>{
    	return response.json();
    }).then(json=> {
    	const results = AppUtils.processResponse(json);
    	appStore.handleResponse(results); // despite my efforts to resolve issue, the flux dispatcher wasn't working for me
    }).catch(error => {
    	console.log(error);
    });
  },
};

export default AppActions;