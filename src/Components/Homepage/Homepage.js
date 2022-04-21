import React, { useContext } from 'react'
import './Homepage.css'
import Card from '../Card/Card'

import { AuthContext } from '../../Contexts/AuthContext'
const Homepage = () => {
  const { user, dispatch } = useContext(AuthContext)

  return (
    <div className='homepage container-fluid'>
      <div class='banner'>
        <div class='banner-title'>
          <p>Banner Title</p>
        </div>
        <div class='banner-description'>
          <span>New (and improved) swim styles for every body.</span>
        </div>
        <div class='banner-btn'>
          <button class='btn'>
            <span>Buy Something</span>
          </button>
          <button class='btn'>
            <span>Learn more</span>
          </button>
        </div>
      </div>
      <div class='container-card'>
        <div class='overview-card'>
          <Card
            title='The Cotton Box-Cut Shirt'
            src='https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1100/v1/i/588b11ad_6b84.jpg'
            text='The Cotton Box-Cut Shirt'
          />
          <Card
            title='The Cotton Box-Cut Shirt'
            src='https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1100/v1/i/588b11ad_6b84.jpg'
            text='The Cotton Box-Cut Shirt'
          />
          <Card
            title='The Cotton Box-Cut Shirt'
            src='https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1100/v1/i/588b11ad_6b84.jpg'
            text='The Cotton Box-Cut Shirt'
          />
           <Card
            title='The Cotton Box-Cut Shirt'
            src='https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1100/v1/i/588b11ad_6b84.jpg'
            text='The Cotton Box-Cut Shirt'
          />
           <Card
            title='The Cotton Box-Cut Shirt'
            src='https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1100/v1/i/588b11ad_6b84.jpg'
            text='The Cotton Box-Cut Shirt'
          /> 
          <Card
            title='The Cotton Box-Cut Shirt'
            src='https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1100/v1/i/588b11ad_6b84.jpg'
            text='The Cotton Box-Cut Shirt'
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage
