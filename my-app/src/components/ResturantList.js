import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import{Link} from 'react-router-dom';

class ResturantList extends Component {
        constructor(){
            super();
            this.state = {
                list: null
            }
        }

        componentDidMount(){
            fetch("http://localhost:3000/resturant").then((response) => {
                response.json().then((result) => {
                    
                    this.setState({
                        list:result
                    })
                })
            })
        }

    render() {
        return (
            <div>
                <h1>Resturant list</h1>
                <Table striped borderd hover varient="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Email</th>
                            <th>Operation</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    this.state.list ?
                            this.state.list.map((item) =>(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.email}</td>
                                    <td><Link to={'/update/'+item.id}>Edit</Link></td>
                                </tr>
                            ))
                    :
                    <p>Please wait data loading....</p>
                }
                </tbody>
                </Table>
            </div>
        );
    }
}

export default ResturantList;