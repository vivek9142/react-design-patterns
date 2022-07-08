/*
03 - just to show you, remember earlier, when we created our small person list item, 
large person list item, et cetera. I said that making those in such a way that they didn't 
contain their own styles would make them much more flexible in the future. Now I'm going to 
demonstrate how that's true by inserting one of those list items. 
*/

import { Modal } from "./Modal";
import { LargeProductListItem } from "../List/products/LargeProductListItem";
import { products } from "../List/ListApp";

const ModalApp = () => {
    return(
        <>
            <Modal>
                {/* 
                04 -  if we were going to use this large product list item for other .
                things, besides list items, we might want to rename it to something like 
                large product details, right? And that would make more sense. And that would 
                allow us to basically display that now either in a list or in a modal, which 
                is kind of the strong suit of layout components. 
                */}
                <LargeProductListItem product={products[0]}/>
            </Modal>
        </>
    )
};

export default ModalApp;