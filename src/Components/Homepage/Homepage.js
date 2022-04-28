import React, { useContext,useEffect} from 'react'
import './Homepage.css'
import Card from '../Card/Card'
import { USER_LOGIN } from '../../Enum/Constants'

import { AuthContext } from '../../Contexts/AuthContext'
const Homepage = () => {
  const {distpatch,user} = useContext(AuthContext);
  useEffect(()=>{
  },[])
  return (
    <div className='homepage container-fluid'>
      <div className='banner'>
        <div className='banner-title'>
          <p>Banner Title</p>
        </div>
        <div className='banner-description'>
          <span>New (and improved) swim styles for every body.</span>
        </div>
        <div className='banner-btn'>
          <button className='btn'>
            <span>Buy Something</span>
          </button>
          <button className='btn'>
            <span>Learn more</span>
          </button>
        </div>
      </div>
      <div className='container-card'>
        <div className='overview-card'>
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
