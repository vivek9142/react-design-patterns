/*
04 - So it's taking a prop called items and it's also going to take a prop called resource 
name. So this is going to be either products, or people, or whatever kind of resource that 
this list is going to be displaying. Now, the final prop, and I'm going to just indent all 
of these for readability. The final prop here is going to be called item component. Now, 
this is going to be the actual component that we use to display each of the items in this 
items array prop that we're getting here. 
*/

export const RegularList = ({
    items,
    resourceName,
    itemComponent:ItemComponent
}) => {
    return (
        // 05 - We're going to map over all of the items and display one item component for 
        // each of them, passing it to the prop called resource name. 
        <>
            {items.map((item,i) =>(
                <ItemComponent key={i} {...{[resourceName]:item}}/>
            ))}
            {/* 06 -  we're going to pass through item for that. So what this is going to 
            change to, let's say that we pass in person as resource name, this is going to 
            change to person equals item.  */}
        </>
    )

}