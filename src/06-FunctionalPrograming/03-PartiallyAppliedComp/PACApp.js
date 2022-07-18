// 05 - import n use Buttons
import { DangerButton,BigSuccessButton } from "./partialHOC"


function PACApp() {
	return (
		<>
			<DangerButton text="Don't do it!"/>
			<BigSuccessButton text='Yes!!'/>
		</>
	);
}

export default PACApp;

/*
06 - We see that now we have the exact same thing, except we're using higher order components 
to achieve this instead of explicitly creating new components like we did in our composition 
example here.
*/