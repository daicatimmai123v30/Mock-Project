import {
  Button,
  ButtonGroup,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Stack
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import './CartPage.css'
import { AuthContext } from '../../Contexts/AuthContext'
import { ADD_CART, REMOVE_CART } from '../../Enum/Constants'
const CartPage = () => {
  const { carts, user, distpatch } = useContext(AuthContext)
  //   const [cartData, setCartData] = useState(null)
  useEffect(() => {
    // const response = carts.filter(value => value?.idUser === user?.info?.id)
    // setCartData(response[0]?.items)
  }, [])
  return (
    <div className='list-items container-fluid'>
      <div className='items'>
        <div className='my-3'>
          <Typography align='right' variant='subtitle1'>
            Giỏ hàng
          </Typography>
          <div className='w-100 border border-dark my-1'></div>
        </div>
        <div className='box-items'>
          <div className='w-75' style={{ minHeight: '200px' }}>
            {carts[0]?.items.map((value, index) => (
              <List key={index}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      variant='square'
                      src={value?.images[0]}
                      sx={{
                        width: 100,
                        height: 120
                      }}
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={value.title} secondary={value.price} />
                  <ButtonGroup
                    variant='contained'
                    aria-label='outlined button group'
                    size='small'
                    color='inherit'
                  >
                    <Button onClick={() => distpatch(ADD_CART, value)}>
                      +
                    </Button>
                    <Button>{value.amount}</Button>
                    <Button onClick={() => distpatch(REMOVE_CART, value)}>
                      -
                    </Button>
                  </ButtonGroup>
                </ListItem>
              </List>
            ))}
          </div>
          <div
            className='w-25 d-flex  align-items-end'
            style={{ height: '200px'}}
          >
            <Stack className='w-100' spacing={1}>
              <Typography align='center' variant='subtitle1'>
                {carts[0]?.items.reduce((total,currentValue)=>{
                    return total+currentValue.price*currentValue.amount
                },0)}
              </Typography>
              <Button variant='contained' color='secondary'>
                Thanh Toán
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
