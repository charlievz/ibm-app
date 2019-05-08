import React from 'react';
import { Divider } from 'semantic-ui-react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class PageComponent extends React.Component {

	render() {
		return (
			<div>
				<SearchForm/>
				<Divider/>
				<SearchResults/>
			</div>
		);
	}
}

export default PageComponent;