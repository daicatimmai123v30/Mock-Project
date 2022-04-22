import React from 'react';
import { MenuItem,ListItemText,Divider } from '@mui/material';

function CategoryMenuCard(props) {
    return (
        <>
            <MenuItem>
            <ListItemText inset>{props.category.name}</ListItemText>
            </MenuItem>
            <Divider />
        </>
    );
}

export default CategoryMenuCard;