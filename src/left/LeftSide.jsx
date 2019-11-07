import React, { Component } from 'react'
import LeftChamps from './LeftChamps'
import charBar from '../images/char.png'

export default class LeftSide extends Component {
    
    
    render() {
        console.log(this.props.animeList);
        
        let title = this.props.animeList.map(element =>{
            return <LeftChamps detailsClick={this.props.detailsClick} element={element}/>
        })
        return (
            <div className="champs-list">             
                <div >
                    {title}
                </div>
            </div> 
        )
    }
}
