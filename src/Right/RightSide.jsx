import React, { Component } from 'react'
import {Image, Navbar, Nav,Container,Col,Row} from 'react-bootstrap'
import {Card, CardGroup} from 'react-bootstrap'
import axios from "axios"

export default class RightSide extends Component {
state = {
    imges: [],
    counter: 0
}
// componentDidMount(){
//     for (let i = 0; i < this.props.anime.chapters_len; i++) {
//         const element = this.props.anime.chapters.Array[i].Array[3]; 
//     }
//     axios.get(`https://www.mangaeden.com/api/manga/${this.props.anime.chapters.array}`)
//     .then((res)=> {
//     //   let tmparry = []
//     //   for (let i = 0; i < 20; i++) {
//     //     tmparry.push(res.data.manga[i])
//     //   }
//     //   this.setState({
//     //     data : tmparry
//     //     })
      
//         console.log(res.data);
//         console.log(this.state.data);
//   })
//   }
    render() {
        
        let url = "https://cdn.mangaeden.com/mangasimg/"
        let ar = []
        ar.push(this.props.anime.chapters)
        console.log(ar[0]);
        let sec = []
    sec.push(ar[0])
    console.log(''+sec[0]);

    
        
        let details = this.props.anime.created> 0  ?
             this.props.flag === 'false' ?
             <div style={{color: 'white'}}>
                <div className="film-detail is-hydrated ">
                <Container>
          <Row>
            <Col xs={5} md={4}>
            <img src={url + this.props.anime.image} alt="" />
            </Col>
            <Col >
            <figure className="film-backdrop">
                    
                    <h1 className="film-title">{this.props.anime.title}</h1>
                    <h2 className="film-title">{this.props.anime.aka}</h2>
                    <h3 className="film-title">{this.props.anime.released}</h3>
                    <h3 className="film-title">Chapters: {this.props.anime.chapters_len}</h3>
                </figure>
            
            
            <div className="film-meta">
                    <h2 className="film-tagline"></h2>
                    <p className="film-detail-overview"> Description
                    {/* <img src={posterUrl} className="film-detail-poster" alt={this.props.film.title} /> */}
                    {this.props.anime.description}
                    </p>
                </div> 
                <br/>
                <button onClick={() =>this.props.ButtonClick()}> Read Manga ...</button>
                           </Col>
          </Row>
        </Container>
                    
                
</div>
                
                
            </div>
            :
            <div style={{color: 'white'}}>
                <div>
                <div className='readercont'>
                <div className='reader'>
                    <img/>
                    <button>>>>></button>
                    <button> </button>
                </div>
                </div>
            </div>
            </div>
            
            :
            <div className="champs-detail" style={{color: 'white'}}>
                <p>
                    <i className="material-icons">subscriptions</i>
                    <span>No film selected</span>
                </p>
            </div>
        return (
            <div className="champs-details">
                <h1> Anime Detailes</h1>
                <br/>
                <br/>
                <br/>
            {details}
            </div>
        )
    }
}
