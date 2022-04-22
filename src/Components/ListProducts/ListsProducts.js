import React, { useEffect, useState,useContext } from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Pagination,
  CardMedia
} from '@mui/material'
import { useLocation,useNavigate } from 'react-router-dom'

import { AuthContext } from '../../Contexts/AuthContext'
import { ADD_CART } from '../../Enum/Constants'

import './ListProducts.css'

const ListsProducts = () => {
  const [products, setProducts] = useState([])
  const { search } = useLocation();
  const navigate = useNavigate();

  const {distpatch,carts,user} = useContext(AuthContext);
  console.log(carts)
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('PRODUCTS')).splice((Number(search.split('=')[1])-1)*8,8);
    setProducts(response)
  }, [])

  const onAddToCart = (product)=>{
    if(user.isAuth)
      distpatch(ADD_CART,product)
    else
      alert('Bạn phải đăng nhập')
  }

  return (
    <div className='list-products container-fluid'>
      <div className='products'>
        <div className='my-3'>
          <Typography align='right' variant='subtitle1'>
            Sản phẩm
          </Typography>
          <div className='w-100 border border-dark my-1'></div>
        </div>
        <div className='box-products'>
          {products.map((value, index) => (
            <Card
              key={index}
              sx={{
                width: 250,
                float: 'left',
                marginLeft: 2.5,
                marginRight: 2.5,
                marginBottom: 1
              }}
            >
              <CardMedia 
                image={value.images[0]}
                sx={{width:'100%',height:'400px'}}
                >
                </CardMedia>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {value.description}
                </Typography>
                <Typography
                  sx={{ mt: 1.5, textAlign: 'right' }}
                  color='text.secondary'
                >
                  {value.price}
                </Typography>
              </CardContent>
              <CardActions sx={{justifyContent:'space-around'}}>
                <Button size='small'>Xem chi tiết</Button>
                <Button size='small' color='secondary' onClick={()=>{onAddToCart(value)}}>Thêm Vào</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>

      <div className='pagination'>
        <Stack spacing={1}>
          <Pagination
            count={parseInt(JSON.parse(localStorage.getItem('PRODUCTS')).length/8 + 1)}
            color='secondary'
            defaultPage={Number(search.split('=')[1])}
            onChange={(event, number) => {
                navigate(`/Products?pg=${number}`);
                window.location.reload()
            }}
          />
        </Stack>
      </div>
    </div>
  )
}

export default ListsProducts
