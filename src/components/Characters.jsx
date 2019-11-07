import React from 'react'
import LeftSide from '../left/LeftSide'
import RightSide from '../Right/RightSide'

const Characters = (props) => {
    
    return (
        <div className="champs">
            <LeftSide animeList={props.animeList} detailsClick={props.detailsClick}/>
            <RightSide anime={props.anime} flag={props.flag} ButtonClick={props.ButtonClick}/>
        </div>
    )
}

export default Characters
