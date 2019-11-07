import React, { Component } from 'react'

import './css/Style.css'
import './App.css'
import Home from './components/Home'
import Manga from './components/Manga'
import LeftChamps from './left/LeftChamps'
import {BrowserRouter,Switch,Route,Link } from "react-router-dom";
import {Image, Navbar, Nav,Container,Col,Row} from 'react-bootstrap'
import wowlogo from './images/tsubaki.png'
import wowlogo1 from './images/manga.png'

import TMDB from "./TMDB";


export default class App extends Component {

state = {
  flag: false
}

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
        
        <Container>
          <Row>
            <Col xs={5} md={4}>
            <Image src={wowlogo} />
            </Col>
            <Col xs={5} md={4}>
            <Image src={wowlogo1} />
              <Image src="holder.js/171x180" roundedCircle />
            </Col>
          </Row>
        </Container>
        
        </header>
        <div>
        <BrowserRouter >
        <Navbar  className="justify-content-center navBar" >
          <Nav>
          <Nav.Item>
          <Link to="/home" variant="pills" defaultActiveKey="/home"> 
          <h1>Home</h1>
          </Link>
          </Nav.Item>

          &nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Item>
          <Link to="/manga"><h1>Manga List</h1></Link>
          </Nav.Item> 
          </Nav>
        </Navbar>

       <Switch>
        <Route path="/home" component={Home}/>
        <Route excat path="/manga" component={Manga}/>
        

        </Switch>     
      </BrowserRouter>
        </div>
      </div>
    )
  }
}