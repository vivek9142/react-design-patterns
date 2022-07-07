/*
00 - So now that we've seen how to implement a basic split screen component, I'm going to 
show you a few modifications that we can make to that component in order to make it a little 
more developer friendly. So the first thing we're going to see is how to add weight to 
different components displayed by our split screen. What I mean by that is we might want 
our left component to take up less space and our right component to take up more space or 
vice versa.
*/

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex:${props => props.weight};
`;

/*
01 - The first one is going to be left weight, and we're going to give that a default value 
of one. And we'll also have right weight, which will also give a default value of one.
so basically all we have to do now is just pass this left weight and right weight through 
to their respective pane components and then modify this flex property accordingly. 
*/

export const SplitScreen = ({
    left:Left,
    right:Right,
    leftWeight=1,
    rightWeight=1
}) => {
    return (
        <Container>
            <Pane weight={leftWeight}>
                <Left />
            </Pane>

            <Pane weight={rightWeight}>
                <Right />
            </Pane>
        </Container>
    )
}


