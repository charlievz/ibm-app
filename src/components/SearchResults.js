import React from 'react';
import appStore from '../stores/AppStore';
import { Grid, Modal, Segment, Header} from 'semantic-ui-react'

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [
				{
					name: 'Test',
					description: 'hello world hello world hello world hello world hello world hello world hello world hello world hello world',
					dueDate: '2019-05-01',
					completedOn: 'false',
				}
			],
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
				<div className='label'>
					Press the search button
				</div>
			);
		}
		const listItems = results.map((result, idx) =>
			<div key={idx} className='searchResult'>
				<Modal
					trigger = {
						<Segment className='result'>
							<Grid columns={4} divided>
								<Grid.Row>
									<Grid.Column width={10} className='other-column'>
										<p><b>Name</b></p>
										<p className='lowered-text'>{result.name}</p>
									</Grid.Column>
									<Grid.Column width={3} className='other-column'>
										<p><b>Due Date</b></p>
										<p className='lowered-text'>{result.dueDate}</p>
									</Grid.Column>
									<Grid.Column width={3} className='other-column'>
										<p><b>Completed On</b></p>
										<p className='lowered-text'>{result.completedOn}</p>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Segment>
					}
					header={
						<Segment clearing className='modal-header'>
							<Header as='h2' floated='left' textAlign='left'>
								{result.name}
							</Header>
							<Header as='h2' floated='right' textAlign='right'>
								Due on: {result.dueDate}
							</Header>
						</Segment>
					}
					content={result.description}
					actions={this.getModalContent(result)}>
				</Modal>
			</div>
		);
		return (
			<div className='resultsContainer'>
				<p className='label'>SEARCH RESULTS:</p>
				{listItems}
			</div>
		);
	}

	getModalContent = (result) => {
		let completed = {key: 'completed', content: 'Completed', disabled: true};
		let done = { key: 'done', content: 'Done', color: 'blue' };
		if (!result.completedOn || !result.completedOn.length) {
			completed.content = 'Mark as completed';
			completed.disabled = false;
			completed.positive = true;
		}
		return [ completed, done ];
	}

	onChange = () => {
		this.setState({results: appStore.results});
	}
}

export default SearchResults;