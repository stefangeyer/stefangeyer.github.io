import styled from 'styled-components'

export function Terminal() {
    return (
        <Wrapper>
            <Header>
                <IconGroup>
                    <Icon color={'#ff5f56'}></Icon>
                    <Icon color={'#ffbd2e'}></Icon>
                    <Icon color={'#27c93f'}></Icon>
                </IconGroup>
                <p>stefan@stefangeyer.at</p>
            </Header>
            <Body>
                <p>line1</p>
                <p>line2</p>
                <p>line3</p>
            </Body>
        </Wrapper>
    )
}

const Header = styled.div`
    display: flex;
    justify-content: center;
    font-family: Consolas, monaco, monospace;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    background-color: black;
    border: 1px solid orange;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`
const IconGroup = styled.div`
    margin-left: 12px;

    div:nth-child(n + 1) {
        margin-left: 8px;
    }
`
const Icon = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.color || 'white'};
`
