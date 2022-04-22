import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { AddBoxSharp } from '@mui/icons-material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { ListItemText ,ListItemIcon,Divider} from '@mui/material';
import { Check } from '@mui/icons-material';
import CategoryMenuCard from './CategoryMenuCard';

const BASE_DATA = [
    {id: 1,name:'category1'},
    {id: 2,name:'category1'},
    {id: 3,name:'category1'},
    {id: 4,name:'category1'},
    {id: 5,name:'category1'},
    {id: 6,name:'category1'},
    {id: 7,name:'category1'},
    {id: 8,name:'category1'},
]
const height =window.innerHeight
export default function CategoryMenu() {
    const [categoryList,setCategoryList] = React.useState(BASE_DATA)
  return (
    <>
    <Typography component="h" variant="h5" align="center">
            Menu lớn ở dây
      </Typography>
      <Box sx={{
        p:2
      }}>
      <Grid container spacing={2}>
        <Grid xs={2} sx={{
          p:0,
          bgcolor: 'secondary.main'
        }}>
        <MenuList dense sx={{
          p:1
        }}>
          {categoryList.map(category => (
            <CategoryMenuCard category={category} key={category.name}/>
          ))}
      </MenuList>
        </Grid>
        <Grid item xs={10}>hiển thị sản phẩm</Grid>
      </Grid>
    </Box>
    </>

  );
}
