import React from 'react'
import LeftSide from '../left/LeftSide'
import RightSide from '../Right/RightSide'
const LeftChamps = (props) => {
  let url = "https://cdn.mangaeden.com/mangasimg/"
    return (
      
        <div className="film-row" onClick={ ()=> props.detailsClick(props.element)}>
          <img src={url+props.element.im}/>
        <div className="film-summary">
          
          <h4>{props.element.a}</h4>
          <p>Category: {props.element.c+ ``}</p>
        </div>
        </div>
    )
}

export default LeftChamps

