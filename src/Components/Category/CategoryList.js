import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CategoryCard from './CategoryCard';

const BASE_DATA = [
    { name : 'Đồ Thể Thao',mota:'the loai 1asdasdasdasdasdasdasdasdasd'},
    { name : 'Đồ Làm Việc',mota:'the ldasdasdasd'},
    { name : 'Đồ Công Sở',mota:'the loai 1asdasdadasdasdasdasdasd'},
    { name : 'Đồ Trẻ Em',mota:'thedasdasdasdasdasdasd'},
    { name : 'Đồ Name',mota:'the loai 1asdasdadasdasdasdasdasd'},
    { name : 'Đồ Nữ',mota:'the loai 1asdasdadasdasdasdasdasd'},
    { name : 'Đồ Cosplay',mota:'the loai 1asdasdadasdasdasdasdasd'},
    { name : 'Chơi Đồ',mota:'the loai 1asdasdadasdasdasdasdasd'},
    { name : 'theloai9',mota:'the loai 1asdasdadasdasdasdasdasd'},
    { name : 'theloai10',mota:'the loai 1asdasdadasdasdasdasdasd'},
    { name : 'theloai11',mota:'the loai 1asdasdadasdasdasdasdasd'},
    { name : 'theloai12',mota:'the loai 1asdasdadasdasdasdasdasd'}
]

export default function CategoryList() {
    const [categoryList,setCategoryList] = React.useState(BASE_DATA)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {categoryList.map(category => (
          <Grid item xs={2} sm={3} md={3} key={category.name}>
            <CategoryCard category={category}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
