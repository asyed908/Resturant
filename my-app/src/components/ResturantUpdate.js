import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'; // parameter



    const ResturantUpdate = () => {
    const { id } = useParams()
    const [name,setName] = useState('')
    const [rating,setRating] = useState('')
    const [email,setEmail] = useState('')

        useEffect(() => {
            const fetchData = () => {
                try{
                const responce = fetch("http://localhost:3000/resturant/" + id)
                console.log(responce)
                }
                catch(error) {
                    console.log(error)
                }
            }
            fetchData()
        })

    
        return (
            <div className='contain'>
             <h1>Resturant Update</h1>
            <input type ="text" placeholder='Name' onChange={(event) => {this.setState({name: event.target.value})}}/>  <br/><br/>
            <input type ="text" placeholder='Rating' onChange={(event) => {this.setState({rating: event.target.value})}} /> <br/><br/>
            <input type ="text" placeholder='Email' onChange={(event) => {this.setState({email: event.target.value})}}/> <br/><br/>
           {/* <button onClick={() => fetchData()}>Add Data</button> */}


            </div>
        );
    
}

export default ResturantUpdate;