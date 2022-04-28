export const productsListSelector = (state) =>{

    const results =state.productsList.filter((product)=>{
        
        return (
            state.filters.selectType.length >0? 
            product.title.includes(state.filters.search) && state.filters.selectType.includes(product.idCategory)
            :product.title.includes(state.filters.search)
            
        );
            
        });

            return results.sort((prd1,prd2)=>{

                if( state.filters.sort ==='name'){
                    return prd1.title.toLowerCase()=== prd2.title.toLowerCase() ? 0 
                     : prd1.title.toLowerCase()> prd2.title.toLowerCase() ? 1
                     : -1
                }else{
                    if( state.filters.sort ==='price'){
                        return prd1.price=== prd2.price ? 0 
                         : prd1.price> prd2.price ? 1
                         : -1
                    }else {
                        return 0;
                    }
                }
            });
        
    };
export const categoriesSelector = (state) => state.categories;
export const searchValueSelector = (state) => state.filters.search;
export const filterCategoriesSelector = (state) => state.filters.selectType;