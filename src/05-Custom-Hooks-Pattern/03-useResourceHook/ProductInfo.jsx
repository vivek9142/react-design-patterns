import { useResource } from "./useResourceHook";

export const ProductInfo = ({productId}) => {
    //05 - add url and use it in useResource
    const product = useResource(`/products/${productId}`);

    const {name,price,description,rating} = product || {};

    return (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>{description}</h3>
            <p>Average Rating: {rating}</p>
        </>
    )
}
