import styled from "@emotion/styled";

export const MainContainer = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
max-width: 1400px;
height: calc(100vh - 122px);


@media (min-width: 768px) {
    flex-direction: row;
    height: calc(100vh - 70px);
    padding-left: 10px;
    border-right: 2px solid #d6d6d6;
}

.list-items-aside{
    width: 100%;
    
    @media (min-width: 768px) {
        width: calc(100%/3.5);
    };
}

.workspace-section{
    width: 100%;
    height: 100%;
}
`

export const MainStyle = styled.main`
width: 100%;

`
