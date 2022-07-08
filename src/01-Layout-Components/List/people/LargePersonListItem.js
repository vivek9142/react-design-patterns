/*
02 - let's implement our large person list item.and  For that, I'm just going to copy and 
paste our small person list item into large person list item. We're going to have to change 
the name here and this one's going to display a little more information than the small 
person list item. 

We don't really want this large person list item to be determining its own styling, we 
want its parent component to be able to do that. 
*/

export const LargePersonListItem = ({person}) => {
    const {name,age,hairColor,hobbies} = person;

    return (
        <>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <ul>
            {
                hobbies.map(
                    hobby => (<li key={hobby}>{hobby}</li>)
                )
            }
        </ul>
        </>
    )
};

/*
03 - Now, before we go on to implementing the small product and large product list items, I 
want  to actually create the list components themselves. So, currently, we've only been 
creating the actual list item components. So let's take a look at what the lists that are 
going to display these components are going to look like. 

we're actually just going to have a single list component that can display all of these 
different list items. Let me show you how that works. Inside the source folder, we're going 
to create a new file and we'll call this regular list. 
*/