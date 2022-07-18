/*
02 - now, if we wanted to use both the danger button and a big success button in our app, 
what that would look like, let's just import those two things, danger button and big success 
button from composition.
*/

import { DangerButton,BigSuccessButton } from "./composition";


function CompApp() {
	return (
		<>
			<DangerButton text="Don't do it!"/>
			<BigSuccessButton text='Yes!!'/>
		</>
	);
}

export default CompApp;

/*
03 - the nice part about this is that we don't have to copy and paste this same code from our 
button component into our danger button and big success button. In other words, both our 
danger and big success buttons are just building off the code that's contained inside of the 
original button component.
*/