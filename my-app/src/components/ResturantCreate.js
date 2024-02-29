import React, { Component } from 'react';


class ResturantCreate extends Component {

        constructor(){
            super();
            this.state = {
                name: null,
                rating: null,
                email: null
                
                
            }
        }
    

        AddData() {
            fetch('http://localhost:3000/resturant', {
                method:"Post",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(this.state)
            }).then((responce) =>{
                responce.json().then((result) =>{
                    alert("Data Successfully inserted.")
                })
            })

        }

    render() {
        return (
            <div className='container'>
                <h1>Resturant Create</h1>
                
                    <label>
                        
                        <input type ="text" placeholder='Name' onChange={(event) => {this.setState({name: event.target.value})}}/>  <br/><br/>
                        <input type ="text" placeholder='Rating' onChange={(event) => {this.setState({rating: event.target.value})}} /> <br/><br/>
                        <input type ="text" placeholder='Email' onChange={(event) => {this.setState({email: event.target.value})}}/> <br/><br/>
    
                        <button onClick={() => this.AddData()}>Add Data</button>

                    </label>
            
                
            </div>
        );
    }
    
}

export default ResturantCreate;