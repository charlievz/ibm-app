import React from 'react';
import appStore from '../stores/AppStore';
import { Grid, Modal, Segment, Header} from 'semantic-ui-react'
import appActions from '../actions/AppActions';

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
				<div className='label'>
					Load Tasks by Clicking the Search Button
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
										<p className='lowered-text'>{result.dueOn}</p>
									</Grid.Column>
									<Grid.Column width={3} className='other-column'>
										<p><b>Completed On</b></p>
										<p className='lowered-text'>{result.completedOn || "Not Completed"}</p>
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
								Due on: {result.dueOn}
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
				<p className='label'>TASKS:</p>
				{listItems}
			</div>
		);
	}

	getModalContent = (result) => {
		let completed = {key: 'completed', content: 'Completed', disabled: true };
		let done = { key: 'done', content: 'Done', color: 'blue' };
		let remove = { className: 'remove-button', key: 'remove', content: 'Remove', color: 'red' }
		remove.onClick = () => {
			appActions.removeTask(result);
		}
		if (!result.completedOn) {
			completed.content = 'Mark as completed';
			completed.disabled = false;
			completed.positive = true;
			completed.onClick = () => {
				appActions.markComplete(result);
			}
		}
		return [ remove, completed, done ];
	}

	onChange = () => {
		this.setState({results: appStore.results});
	}
}

export default SearchResults;