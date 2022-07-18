/*
Recursive components are components that refer to themselves inside the body of the component.

So let's get started creating a recursive component, but before we do that, I want you to 
take a look at the app dot JS file. So notice here that we have this nested object here.
When we're working with nested objects or other kind of nested structures, is usually 
when we turn to recursive components because they provide us with a unique advantage 
*/

/*
01 - we're going to have our recursive component do is take this nested data and display 
all of the keys, and values that it contains. So here's what this is going to look like. 
We're going to start off up here by defining a function called is object. And this is 
basically just going to tell us if the argument that we pass into it is a non null 
object. 
*/
const isObject = x => typeof x === 'object' && x !== null;

export const RecursiveComp = ({data}) => {

    /*
    02 - now that we have that function, the first thing we're going to do inside a 
    recursive component is define what's called a stopping case. Basically, this is the case 
    where we will stop recursing and simply return some value that doesn't involve referring 
    recursively to the component itself.

    In other words, when the data that the component receives is just a value of some kind. 
    So what we're going to say is if the data prop is not an object, okay. So if not is 
    object data, then what we're going to do is simply return a list item that contains the 
    data. Okay, so we'll say list item, data, just like that. Okay, so that's the stopping 
    condition, but if data is an object, then what we want to do is get each individual key 
    and value of that object and display another recursive component for each of those key 
    and value pairs. 
    */
    if(!isObject(data)){
        return (
            <li>{data}</li>
        )
    }
    /*
    03 - So what this is going to look like is we're going to start off by getting the entries 
    of this data object, because we know that it's an object now after this if statement, 
    and we're going to say const pairs equals object dot entries data, and what object dot 
    entries does is it returns an array of all of the key and value pairs from this object 
    that we have here.
    */
    const pairs = Object.entries(data);

    /*
    04 - now that we have those pairs of keys and values, what we're going to do is say 
    return inside here, we're going to have React fragments. And we're going to say payers 
    dot map. And for each key value pair, what we're going to do is get the key and value, 
    which we can do with array de-structuring here saying key and value. And for each of 
    those keys and values, what we're going to do is display a list item, which will contain 
    the key with a colon after it, and inside that we will have a nested unordered list, 
    okay. And here is where our component becomes a recursive component. It's actually going 
    to refer to itself inside the JSX. 
    */

    return (
        <>
            {
                pairs.map(([key,value])=>(
                    <li>
                        {key}:
                        <ul>
                            <RecursiveComp data={value}/>
                        </ul>
                    </li>
                ))
            }
        </>
    )
}