import React from 'react';
import { Grid, Icon, Input, Button, Dropdown, Segment, Modal, Header } from 'semantic-ui-react'
import { RangeSelections, ViewSelections } from '../constants/AppConstants';
import CreateForm from './CreateForm';
class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			range: '',
			view: 'all',
			firstDate: '',
			secondDate: '',
		};
	}
	render() {
		const {range, view, firstDate, secondDate} = this.state;
		let inputs;
		if (range === 'between') {
			inputs = (
				<div className='between-range'>
					<Input
						className='range-input'
						placeholder='YYYY-MM-DD'
						value={firstDate}
						onChange={this.handleFirstDateChange}
					/>
					-
					<Input
						className='range-input'
						placeholder='YYYY-MM-DD'
						value={secondDate}
						onChange={this.handleSecondDateChange}
					/>
				</div>
			);
		} else if (range !== '') {
			inputs = (
				<div>
				<Input
					className='range-input'
					placeholder='YYYY-MM-DD'
					value={firstDate}
					onChange={this.handleFirstDateChange}
				/>
				</div>
			);
		}
		return (
			<div className='formDiv'>
				<Grid columns={3} divided>
					<Grid.Row>
						<Grid.Column width={7} className='other-column'>
							<div className='view-range-container'>
								<b>Due:</b>
								<Dropdown
									placeholder='Select Range'
									fluid
									search
									selection
									options={RangeSelections}
									value={range}
									onChange={this.handleRangeChange}
									className='range-dropdown'
								/>
								{inputs}
							</div>
						</Grid.Column>
						<Grid.Column width={3} className='other-column'>
							<div className='view-dropdown-container'>
								<b>View:</b>
								<Dropdown
									placeholder='Select Range'
									fluid
									selection
									options={ViewSelections}
									value={view}
									onChange={this.handleViewChange}
									className='range-dropdown'
								/>
							</div>
						</Grid.Column>
						<Grid.Column width={3} className='other-column'>
							<Modal
								trigger = {
									<Button icon primary labelPosition='left'>
										<Icon name='plus'/>
										Create
									</Button>
								}
								header = {
									<Segment clearing className='modal-header'>
										<Header as='h2' textAlign='center'>
											Create new Task
										</Header>
									</Segment>
								}
								content = {
									<CreateForm />
								}>
							</Modal>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Button primary className='search-button'> Search </Button>
			</div>
		);
	}

	getModalContent = () => {
		return (
			<div>Hello world</div>
		);
	}
	handleSearch = () => {
		// AppActions.handleSearch(this.state);
	}
	handleFirstDateChange = (event, data) => {
		this.setState({firstDate: data.value});
	}
	handleSecondDateChange = (event, data) => {
		this.setState({secondDate: data.value});
	}
	handleViewChange = (event, data) => {
		this.setState({view: data.value});
	}
	handleRangeChange = (event, data) => {
		this.setState({range: data.value});
	}
}

export default SearchForm;