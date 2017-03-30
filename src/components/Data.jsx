import React from 'react';

import Button from  './Button';

class Data extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.editing) {
            this.refs.value.focus();
            this.refs.value.select();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let value = this.refs.value.value;

        this.props.onEdit(this.props.id, value);
        this.setState({editing: false});
    }

    renderDisplay() {
        return (
            <div>

                <span className="todo-title">{this.props.value}</span>

                <Button className="edit icon" icon="edit" onClick={() => this.setState({editing: true})}/>
                <Button className="delete icon" icon="delete" onClick={() => this.props.onDelete(this.props.id)}/>
            </div>
        );
    }

    renderForm() {
        return (
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="value" defaultValue={this.props.value}/>
                <Button className="save icon" icon="save" type="submit"/>
            </form>
        );

    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

Data.propTypes = {
    value: React.PropTypes.string.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onEdit: React.PropTypes.func.isRequired
};


export  default Data;