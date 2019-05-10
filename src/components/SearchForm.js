import React from 'react';
import { Grid, Icon, Input, Button, Dropdown, Segment, Modal, Header } from 'semantic-ui-react'
import { RangeSelections, ViewSelections } from '../constants/AppConstants';
import appActions from '../actions/AppActions';
import AppUtils from '../utils/AppUtils';
import CreateForm from './CreateForm';

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			range: '',
			view: 'all',
			firstDate: '',
			secondDate: '',
			firstDateError: false,
			secondDateError: false,
			modalOpen: false,
		};
	}

	componentDidMount() {
		const { modalOpen, firstDateError, secondDateError, ...searchState } = this.state;
		appActions.handleSearch(searchState);
	}

	render() {
		const { range, view, firstDate, secondDate, modalOpen, firstDateError, secondDateError } = this.state;
		let inputs;
		let disableSearch;
		if (range === 'between') {
			inputs = (
				<div className='between-range'>
					<Input
						className='range-input'
						placeholder='YYYY-MM-DD'
						value={firstDate}
						onChange={this.handleFirstDateChange}
						error={firstDateError}
					/>
					-
					<Input
						className='range-input'
						placeholder='YYYY-MM-DD'
						value={secondDate}
						onChange={this.handleSecondDateChange}
						error={secondDateError}
					/>
				</div>
			);
			if (!firstDate.length || !secondDate.length) {
				disableSearch = true;
			}
		} else if (range === 'on') {
			inputs = (
				<div>
					<Input
						className='range-input'
						placeholder='YYYY-MM-DD'
						value={firstDate}
						onChange={this.handleFirstDateChange}
						error={firstDateError}
					/>
				</div>
			);
			if (!firstDate.length) {
				disableSearch = true;
			}
		}
		if (firstDateError || secondDateError) {
			disableSearch = true;
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
									clearable
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
									<Button onClick={this.handleOpen} icon primary labelPosition='left'>
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
									<CreateForm closeForm={this.handleClose} />
								}
								onClose={this.handleClose}
								open={modalOpen}
								>
							</Modal>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Button
					primary
					className='search-button'
					onClick={this.handleSearch}
					disabled={disableSearch}
				> Search
				</Button>
			</div>
		);
	}

	handleOpen = () => {
		this.setState({ modalOpen: true });
	}

	handleClose = () => {
		this.setState({ modalOpen: false })
	}

	handleSearch = () => {
		const { modalOpen, firstDateError, secondDateError, ...searchState } = this.state;
		appActions.handleSearch(searchState);
	}

	handleFirstDateChange = (_event, data) => {
		const firstDateError = AppUtils.testDateString(data.value);
		this.setState({
			firstDate: data.value,
			firstDateError,
		});
	}

	handleSecondDateChange = (_event, data) => {
		const secondDateError = AppUtils.testDateString(data.value);
		this.setState({
			secondDate: data.value,
			secondDateError,
		});

	}

	handleViewChange = (_event, data) => {
		const { modalOpen, firstDateError, secondDateError, ...searchState } = this.state;
		appActions.handleSearch(Object.assign(searchState, {view: data.value}));
		this.setState({view: data.value});
	}

	handleRangeChange = (_event, data) => {
		this.setState({ range: data.value });
	}
}

export default SearchForm;