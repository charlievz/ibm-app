import React from 'react';
import appStore from '../stores/AppStore';
import { Grid, Image, Segment } from 'semantic-ui-react'

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
		};
	}

	componentDidMount() {
		appStore.addChangeListener(this.onChange);
	}

	componentUnmount() {
		appStore.removeChangeListener(this.onChange);
	}

	render() {
		const {results} = this.state;
		if (!results.length) {
			return (
				<div className='label'>Press the search button</div>
			);
		}
		const listItems = results.map((result, idx) => 
			<div key={idx} className='searchResult'>
				<Segment>
				    <Grid columns={3} divided>
				    	<Grid.Row>
							<Grid.Column width={10} className='left-column'>
								<a href={result.repoLink}><b>{result.ownerName} / {result.repoName} </b></a>
								<p className='description'>{result.description}</p>
							</Grid.Column>
							<Grid.Column width={3} className='other-column'>
								<p><b>STARS</b></p>
								<p className='lowered-text'>{result.numStars}</p>
							</Grid.Column>
							<Grid.Column width={3} className='other-column'>
								<p><b>LICENSE</b></p>
								<p className='lowered-text'>{result.license}</p>
							</Grid.Column>
						</Grid.Row>
				    </Grid>
				</Segment>
			</div>
		);
		return (
			<div className='resultsContainer'>
				<p className='label'>SEARCH RESULTS:</p>
				{listItems}
			</div>
		);
	}

	onChange = () => {
		this.setState({results: appStore.results});
	}
}

export default SearchResults;