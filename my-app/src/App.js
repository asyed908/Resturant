//import React from 'react'; 
import React, {Component} from 'react';
import Home from './components/Home';
import './App.css';
import ResturantCreate from './components/ResturantCreate';
import ResturantDetail from './components/ResturantDetail';
import ResturantList from './components/ResturantList';
import ResturantSearch from './components/ResturantSearch';
import ResturantUpdate from './components/ResturantUpdate';
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap';
import Splash from './components/Splash'



class App extends Component {
    constructor() {
      super();
      this.state = {loading:true}
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      },5000)
    }
    
    

  render(){
    if(this.state.loading) {return <Splash/>}
  

    return (
    
    <div>
      
      
        <BrowserRouter>

        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">WEBSITE NAME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to='/list'>ResturantList</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/details'>ResturantDetail</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/create'>ResturantCreate</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/search'>ResturantSearch</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/update'>ResturantUpdate</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/list' element={<ResturantList />} />
            <Route path='/details' element={<ResturantDetail />} />
            <Route path='/create' element={<ResturantCreate />} />
            <Route path='/search' element={<ResturantSearch />} />
            <Route path='/update/:id' element={<ResturantUpdate />} />
          </Routes>
        </BrowserRouter>
      
    </div>
      
   );
  
  }
}

  


export default App;
