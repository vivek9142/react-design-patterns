import React,{useState , useEffect} from 'react';
import axios from 'axios';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);


/*
02 - it's still going to take the component as its first argument, the component that we're 
trying to wrap and then pass props to. But as it's second and third props, instead of taking 
a userId, since we're going to be working with resources instead of just users, we're going 
to be working with any kind of data, we're just going to specify the resource path, that is 
the path on the server, and we're going to specify the resourceName. 
*/
export const withEditableResource = (Component, resourcePath, resourceName) => {
    return props => {
        
        const [originalData,setOriginalData] = useState(null);
        const [data,setData] = useState(null);

        useEffect(()=>{
            (async () =>{
                const response = await axios.get(resourcePath);
                setOriginalData(response.data);
                setData(response.data);
            })();
        },[]);

        const onChange = changes => {
            setData({...data, ...changes});
        }

        const onSave = async () => {
            const response = await axios.post(resourcePath,{[resourceName]:data});
            setOriginalData(response.data);
            setData(response.data);
        }

        const onReset = () => {
            setData(originalData);
        }

        /*
        03 - What we need to do, obviously we want to allow ourselves to pass in on 
        changeUser, onSaveUser onResetUser. We don't just want to shorten each of these to 
        onChange, onSave and onReset. And the reason for this is because there may be 
        situations where we want to use the same higher order component several times over 
        again. 
        */

        const resourceProps = {
            [resourceName]:data,
            [`onChange${capitalize(resourceName)}`]:onChange,
            [`onSave${capitalize(resourceName)}`]:onSave,
            [`onReset${capitalize(resourceName)}`]:onReset,
        }

            return <Component {...props} {...resourceProps} />;

    }
}

/*
04 -  So the way this withEditableResource component is going to work is we're going to go 
into our userInfoForm component that we had from earlier. And instead of using 
withEditableUser, we're going to change this to withEditableResource. So let's say import 
withEditableResource, change this here to withEditableResource. 
*/