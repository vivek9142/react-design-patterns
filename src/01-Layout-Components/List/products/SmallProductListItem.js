/*
08 - So now that we've seen how to use our regular list component to display people, 
using two different item components, we're going to implement the same kind of components 
for displaying products, 
*/
export const SmallProductListItem = ({product}) =>{
    const {name,price} = product;

    return(
        <h3>{name} - {price}</h3>
    )
}

/*
09 - again, what this is going to allow us to do is have the parent component, essentially, 
whatever kind of list is displaying this item, determine the overall styling instead of us, 
you know, putting some kind of styled div as a wrapper. 
*/