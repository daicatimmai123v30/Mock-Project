import React, { useState, useContext } from 'react'
import {
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  ButtonGroup,
  Avatar,
  Stack
} from '@mui/material'
import './Header.css'

import { useNavigate } from 'react-router'
import { AuthContext } from '../../Contexts/AuthContext'
import { ADD_CART,REMOVE_CART, USER_LOGOUT } from '../../Enum/Constants'

const Header = () => {
  const [visibleModel, setVisibleModel] = useState(false)

  const navigate = useNavigate();
  const { carts, user, distpatch} = useContext(AuthContext)
  return (
    <div className='container-fluid'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light px-3'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            Home
          </a>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>Category Page</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' onClick={()=>navigate('/Products?pg=1')}>
                  Sản phẩm
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' onClick={()=>navigate('/CartPage')}>
                  Giỏ hàng
                </a>
              </li>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
            <form className='d-flex align-items-center'>
              {user.isAuth?(
               <>
                  <a className='nav-link' onClick={()=>distpatch(USER_LOGOUT)}>
                    Logout
                  </a>
                  <ion-icon
                    class='icon-user'
                    name='person-circle-outline'
                  ></ion-icon>
                  <ion-icon
                    class='icon-cart'
                    name='cart-outline'
                    onClick={() => setVisibleModel(true)}
                  ></ion-icon>
                 
               </>
              ):(
                <a className='nav-link' href='/Login'>
                  Login
                </a>
              )}
           
            </form>
          </div>
        </div>
      </nav>
      <Modal
        open={visibleModel}
        onClose={() => setVisibleModel(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            backgroundColor: 'white',
            height: '100%',
            width: '400px',
            float: 'right'
          }}
          display='flex'
          flexDirection='column'
          alignItems='center'
          paddingX='10px'
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Giỏ hàng
          </Typography>
          <div className='w-75 bg-dark border border-dark'></div>
          <List sx={{ width: '100%', minHeight: '80%', overflowY: 'auto' }}>
            {carts?.filter(value=>value.idUser===user?.info?.id?true:false)[0]?.items
                  ?.map((value, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar
                    src={value.images[0]}
                    variant='square'
                    sx={{ width: 50, height: 70 }}
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary={value.title} 
                    secondary={value.price}
                />
                <ButtonGroup
                  variant='contained'
                  aria-label='outlined button group'
                  size='small'
                  color='inherit'
                >
                  <Button onClick={()=>distpatch(ADD_CART,value)}>+</Button>
                  <Button>{value.amount}</Button>
                  <Button onClick={()=>distpatch(REMOVE_CART,value)}>-</Button>
                </ButtonGroup>
              </ListItem>
            ))}
          </List>
          <Stack spacing={2}>
            <Button variant='contained' color='secondary'>
              Thanh Toán
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default Header
