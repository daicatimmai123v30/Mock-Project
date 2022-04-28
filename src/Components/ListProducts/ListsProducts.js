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
} from '@mui/material';

import { useLocation,useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'



import './ListProducts.css'
import Category from '../CategoryPage/CategoryPage';
import { productsListSelector,searchValueSelector } from '../../redux/selectors'

const ListsProducts = () => {
  const [products, setProducts] = useState([])
  const [page,setPage] =useState(0);
  
  const navigate = useNavigate();
  const listProducts= useSelector(productsListSelector);
  const searchValue= useSelector(searchValueSelector);
  console.log("value ",searchValue);


  useEffect(() =>{
    let tam=listProducts.map(product => product);
    const result=tam.splice(Number(page-1)*8,8);
    setPage(1);
    navigate(`/Products?`);
    setProducts(result);
  },[listProducts]);
  useEffect(() =>{
    let tam=listProducts.map(product => product);
    const result=tam.splice(Number(page-1)*8,8);
    
    setProducts(result);
  },[page]);
  
  return (
    <div className='list-products container-fluid'>
      <div className='products'>
        <div className='my-3'>
          <Category></Category>
          <Typography align='right' variant='subtitle1'>
         
            
              
            
           Sản phẩm
          </Typography>
          
          <div className='w-100 border border-dark my-1'></div>
          
        </div>
        <div className='box-products'>
          {products.map((value) => (
            <Card
              key={value.id}
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
                <Button size='small' color='secondary' >Thêm Vào</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>

      <div className='pagination'>
        <Stack spacing={1}>
          <Pagination
            count={parseInt(listProducts.length/8 + 1)}
            color='secondary'
            
            page={Number(page)}
            onChange={(event, number) => {
                navigate(`/Products?pg=${number}`);
                setPage(number);
            }}
          />
        </Stack>
      </div>
    </div>
  )
}

export default ListsProducts
