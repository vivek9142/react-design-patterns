/*
Inside the app component, we have an array of people data and an array of products data, 
and what we want to do is display this data inside several different kinds of lists. So I'm 
going to show you how to create some list and list item components that can help us do this 
most effectively. 
*/

/*
11 - Inside this regular list, all we would  have to do, is change this regular list, change 
items to products, change the resource name to product and change the item component to 
either small product list item, or large product list item. All right, and it would be as 
simple as that, we don't have to create any extra components or anything.
*/

import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";

import { SmallProductListItem } from "./products/SmallProductListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { NumberedList } from "./NumberedList";

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

function ListApp() {
	return (
		<>
            <RegularList
            items={people}
            resourceName='person'
            itemComponent={SmallPersonListItem}
            />

            <RegularList
            items={people}
            resourceName='person'
            itemComponent={LargePersonListItem}
            />

            <NumberedList
            items={products}
            resourceName='product'
            itemComponent={SmallProductListItem}
            />

            <RegularList
            items={products}
            resourceName='product'
            itemComponent={LargeProductListItem}
            />
        </>
	);
}

export default ListApp;

/*
07 - we have the same list component displaying a completely different list. For all of the 
people, it's using the large person list item. And I just want to point out before we move 
on that the regular way of doing this is not to have this reusable list component. It's, 
instead, to create a large person list item list and a small person list item list that then 
display those components. So, as you can see, the way that we've done it here makes the 
regular list a lot more reusable. We're able to simply pass in the component that we want 
to be displayed as children of this list.
*/

/*
08 -  What if we wanted to display a list that automatically numbered all of its items, 
for example? Well, the way we would do that is by creating a similar component to our regular 
list that we created before. All right, we're going to create a new file and we'll call it 
numberedlist.js,
*/
