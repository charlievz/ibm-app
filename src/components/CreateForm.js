import React from 'react';
import {Input, Button, Form, TextArea } from 'semantic-ui-react'
import AppActions from '../actions/AppActions';

class CreateForm extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			results: [
				{
					name: null,
					description: null,
					dueDate: null,
					completedOn: null,
				}
			],
		};
    }

    render() {
        const {name, description, dueDate} = this.state;
        return (
            <div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Task Name:*'
                            placeholder='Task Name'
                            value={name}
                            onChange={this.handleNameChange}
                        />
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            label='Due on:*'
                            placeholder='YYYY-MM-DD'
                            value={dueDate}
                            onChange={this.handleDueDateChange}
                        />
                    </Form.Group>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Description:*'
                        placeholder='Description'
                        value={description}
                        onChange={this.handleDescriptionChange}
                    />
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        primary
                        onClick={this.handleCreateClick}
                        content='Create'
                    />
                </Form>
            </div>
        );
    }
    handleCreateClick = () => {
        AppActions.createTask(this.state);
    }
    handleNameChange = (e, data) => {
        this.setState({name: data.value});
    }
    handleDueDateChange = (e, data) => {
        this.setState({dueDate: data.value});
    }
    handleDescriptionChange = (e, data) => {
        this.setState({description: data.value});
    }
}

export default CreateForm;