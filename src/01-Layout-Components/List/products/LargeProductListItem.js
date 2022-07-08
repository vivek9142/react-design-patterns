/*
for LargeProductListItem,
*/

export const LargeProductListItem = ({product}) => {
    const {name,price,description,rating} = product;

    return (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>{description}</h3>
            <p>Average Rating: {rating}</p>
        </>
    )
}

/*
 10 - So earlier we created this regular list, which simply takes some items, a resource 
 name, and a given component that we want to display , maps over the items and passes the 
 correct props to whatever component we give it. Now, if we wanted to simply display our 
 large product, small product list item, et cetera. 
*/