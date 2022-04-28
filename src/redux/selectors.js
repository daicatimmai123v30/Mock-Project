export const productsListSelector = (state) =>{
    const results =state.productsList.filter((product)=>{
        
        return (
            state.filters.selectType.length >0? 
            product.title.includes(state.filters.search) && state.filters.selectType.includes(product.idCategory)
            :product.title.includes(state.filters.search)
            
        );
            
    })
    console.log('reus',results)
    return results;
}
export const categoriesSelector = (state) => state.categories;
export const searchValueSelector = (state) => state.filters.search
export const filterCategoriesSelector = (state) => state.filters.selectType