import React from 'react';
import axios from 'axios';

import Data from './Data';

class Faculties extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/db')
            .then(response => response.data)
            .then(data => this.setState({ data }))
            .catch(Faculties.handleError);
    }

    handleDelete(id) {
        axios.delete(`/api/db/${id}`)
            .then(() => {
                const data = this.state.data.filter(item => item.id !== id);

                this.setState({data});
            })
            .catch(Faculties.handleError);
    }

    handleEdit(id, value) {
        axios.put(`/api/db/${id}`, { value })
            .then(response => {
                const data = this.state.data.map(item => {
                    if (item.id === id) {
                        item = response.data;
                    }
                    return item;
                });

                this.setState({ data });
            })
            .catch(Faculties.handleError);
    }

    static handleError(error) {
        console.error(error);
    }

    render() {
        return (
            <main>
                <h1>Faculties</h1>
                {this.state.data.map((item) => <Data
                        key={item.id}
                        id={item.id}
                        value={item.value}
                        onDelete={this.handleDelete}
                        onEdit={this.handleEdit}
                    />)}
            </main>
        );
    }
}


export default Faculties;