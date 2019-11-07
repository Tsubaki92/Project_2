import React, { Component } from 'react'
import Characters from './Characters'
import Reader from'./Reader'
import axios from 'axios'

export default class Manga extends Component {

    state={
        data: [],
        current: {},
        flag: 'false'
      }
      
      componentDidMount(){
        axios.get('https://www.mangaeden.com/api/list/1/')
        .then((res)=> {
          let tmparry = []
          for (let i = 0; i < 30; i++) {
            tmparry.push(res.data.manga[i])
          }
          this.setState({
            data : tmparry
            })
          
            console.log(res.data);
            console.log(this.state.data);
      })
      }
      
      handleDetailsClick = (anime)=>{
        const url = `https://www.mangaeden.com/api/manga/${anime.i}`
        
        axios({
          method: 'GET',
          url: url
        }).then(response => {
          console.log(response) // take a look at what you get back!
          this.setState({ current: response.data, 
        flag: 'false'})
        })
      }
      handleButtonDetailsClick = ()=>{
        this.setState({ 
            flag: 'true'
        })
      }
    render() {
        return (
            <div>
                <Characters animeList={this.state.data} anime={this.state.current} flag={this.state.flag} ButtonClick={this.handleButtonDetailsClick} detailsClick={this.handleDetailsClick}/>
                
            </div>
        )
    }
}
