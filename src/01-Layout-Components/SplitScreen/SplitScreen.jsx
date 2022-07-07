/*
The first prop is going to be called left, and this is going to be the component that will 
be displayed on the left side of the split screen. And what we're going to do, just to keep 
in with React's convention of giving components capital letter names, rename this left prop 
to Left with a capital L. So that's why I'm doing that. And then we're going to do the same 
thing with right here.
*/
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex:1;
`;


export const SplitScreen = ({
    left:Left,
    right:Right
}) => {
    return (
        <Container>
            <Pane>
                <Left />
            </Pane>

            <Pane>
                <Right />
            </Pane>
        </Container>
    )
}


