/*
the main difference with our controlled form is going to be that we're going to 
track the values of each of our forms inputs using a useState hook. 
*/
import { useEffect } from "react";
import { useState } from "react";

export const ControlledForm = () => {
    const [nameInputErr,setNameInputErr] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState();
    const [hairColor,setHairColor] = useState('');

    useEffect(()=>{
        if(name.length<2)
        setNameInputErr('Name must be two or more characters');
        else 
        setNameInputErr('');
    },[name]);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name,age,hairColor)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {nameInputErr && <p>{nameInputErr}</p>}
            <input 
            type="text" 
            name='name' 
            placeholder='Name'
            value={name} 
            onChange={(e)=>setName(e.target.value)}/>

            <input 
            type="number" 
            name='age' 
            value={age} 
            placeholder='Age' 
            onChange={(e)=>setAge(Number(e.target.value))}/>

            <input 
            type="text" 
            name='hairColor' 
            value={hairColor} 
            placeholder='Hair Color' 
            onChange={(e)=>setHairColor(e.target.value)}/>

            <input 
            type="submit" value='Submit'/>
        </form>
    )
}

/*
 what each of these inputs is doing, what our controlled form is doing that is, is it's 
 creating a two-way binding between the value of each of these inputs and the value of each 
 of these state variables. 

 the main benefit, the one that I use most often anyway, is that controlled forms allow us 
 to do things like, form validation while the user is typing. In other words, before the user 
 has tried to submit the form, we can give them feedback about the values that they've 
 entered in.
*/