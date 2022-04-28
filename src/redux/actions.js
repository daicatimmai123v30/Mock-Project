export const searchProducts =(text)=> {
    return {
        type: 'products/search',
        payload:text
}
    
}

export const filterCategories =(selects)=> {
    return {
        type: 'categories/search',
        payload:selects
}
    
}

export const sortProducts =(selects)=> {
    return {
        type: 'products/sort',
        payload:selects
}
    
}
