/*

*/

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex:${props => props.weight};
`;


export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
}) => {
    /*
    01 - Since children is going to be an array in this case, containing all of the elements that 
    we passed as children to our split-screen component, what we can do is say const left 
    and right. And notice we're not using capital letters in this case, since these are 
    elements and not components
    */
    const [left,right] = children;

    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>

            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    )
}

