/*
00 - First of all, we're going to start off with our small person list item, and we're not 
really going to add any styling to these. It's really just going to be small or large 
depending on the quantity of information that it displays.
*/

export const SmallPersonListItem = ({person}) => {
    const {name,age} = person;

    return (
        <p>Name: {name}, Age: {age} years.</p>
    )
}

/*
01 - So that's our small person list item. Now notice that this small person list item doesn't 
really contain any styling that would indicate it knows where it's being displayed. In other 
words, we could display the small person list item in a numbered list, in a very narrow list, 
in a very wide list, and we could use the styling in its parent component to determine how it 
gets displayed. We'll see that in more detail a little later on. For now, first, let's 
implement our large person list item. 
*/