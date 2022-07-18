/*
05 - we're going to do now is display this recursive component and pass this nested object 
to it and see what it looks like. We'll import n use it.
*/
import { RecursiveComp } from "./RecursiveComp";

const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}

function App() {
	return (
		<RecursiveComp data={nestedObject}/>
	);
}

export default App;