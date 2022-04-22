import React from 'react';
import { MenuItem,ListItemText,Divider,Typography } from '@mui/material';

function CategoryMenuCard(props) {
    return (
        <>
            <MenuItem>
            <Typography component="h" variant="h5"  >
                        {props.category.name}
            </Typography>
            </MenuItem>
            <Divider />
        </>
    );
}

export default CategoryMenuCard;