/*
09 - the numbered lists is going to be very similar to the regular list. 
The main difference is that it's going to automatically display numbers, along with its 
items.
*/

export const NumberedList = ({
    items,
    resourceName,
    itemComponent:ItemComponent
}) => {
    return (
        <>
            {items.map((item,i) =>(
                <>
                <h3>{i + 1}</h3>
                <ItemComponent key={i} {...{[resourceName]:item}}/>
                </>
            ))}
        </>
    )

}

/*
10 - that might not seem like a huge savings at first, but as your apps get larger and larger, 
this can really end up saving you a lot of time.
*/