import React from 'react';
import {Input, Button, Form, TextArea } from 'semantic-ui-react'
import AppActions from '../actions/AppActions';
import AppUtils from '../utils/AppUtils';

class CreateForm extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            name: '',
            description: '',
            dueOn: '',
            dueOnError: false,
		};
    }

    render() {
        const {name, description, dueOn, dueOnError} = this.state;
        return (
            <div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='Task Name:*'
                            placeholder='Task Name'
                            value={name}
                            onChange={this.handleNameChange}
                        />
                        <Form.Field
                            control={Input}
                            label='Due on:*'
                            placeholder='YYYY-MM-DD'
                            value={dueOn}
                            error={dueOnError}
                            onChange={this.handleDueOnChange}
                        />
                    </Form.Group>
                    <Form.Field
                        control={TextArea}
                        label='Description:*'
                        placeholder='Description'
                        value={description}
                        onChange={this.handleDescriptionChange}
                    />
                    <Form.Field
                        control={Button}
                        primary
                        disabled={name.length <= 0 || dueOn.length <= 0 || description.length <= 0 || dueOnError}
                        onClick={this.handleCreateClick}
                        content='Create'
                    />
                </Form>
            </div>
        );
    }

    handleCreateClick = () => {
        const { dueOnError, ...state } = this.state;
        AppActions.createTask(state);
        this.props.closeForm();
    }

    handleNameChange = (e, data) => {
        this.setState({ name: data.value });
    }

    handleDueOnChange = (e, data) => {
        const dueOnError = AppUtils.testDateString(data.value);
        this.setState({
            dueOn: data.value,
            dueOnError,
        });
    }

    handleDescriptionChange = (e, data) => {
        this.setState({ description: data.value });
    }
}

export default CreateForm;