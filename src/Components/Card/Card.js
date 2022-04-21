import React from 'react'

const Card = (props) => {
  return (
    <div class='card mx-2' style={{width: 288,display:'inline-block'}}>
      <img src={props.src} class='card-img-top' alt='...' />
      <div class='card-body'>
        <h5 class='card-title'>{props.title}</h5>
        <p class='card-text'>
          {props.text}
        </p>
        <a href='#' class='btn btn-primary'>
          Buy
        </a>
      </div>
    </div>
  )
}

export default Card
