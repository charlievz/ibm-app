import React from 'react';
import {Input, Button, Form, TextArea } from 'semantic-ui-react'
import AppActions from '../actions/AppActions';

class CreateForm extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            name: '',
            description: '',
            dueOn: '',
		};
    }

    render() {
        const {name, description, dueOn} = this.state;
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
                        disabled={name.length <= 0 || dueOn.length <= 0 || description.length <= 0}
                        onClick={this.handleCreateClick}
                        content='Create'
                    />
                </Form>
            </div>
        );
    }
    handleCreateClick = () => {
        AppActions.createTask(this.state);
        this.props.closeForm();
    }
    handleNameChange = (e, data) => {
        this.setState({name: data.value});
    }
    handleDueOnChange = (e, data) => {
        this.setState({dueOn: data.value});
    }
    handleDescriptionChange = (e, data) => {
        this.setState({description: data.value});
    }
}

export default CreateForm;