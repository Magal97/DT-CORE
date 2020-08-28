import styled, {css} from 'styled-components';

interface ColorProps{
    color: 'green' | 'yellow';
};

interface Props{
    selected: boolean;
}

export const Header = styled.header`
    height: 46px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5636D3;
    z-index: 1;
    
`;

export const StatusRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const TextStatus = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #e8e8e8; 
    margin-right: 10px;
`;

export const Yellow = styled.div`
    width: 64px;
    height: 16px;
    background: #FCD328;
    border-radius: 8px;
    margin-right: 16px;
`;

export const Green = styled.div`
    width: 64px;
    height: 16px;
    background: #1ABB29;
    border-radius: 8px;

`;

export const Container = styled.div`
    padding: 100px 250px 100px 135px;
    width: 100%;
    display: flex;
`;

export const ListContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
  
   
`;

export const LiSquare = styled.li<Props>`
    display: flex;
    width: 800px;
    align-items: center;
    justify-content: space-between;
    height: 147px;
    background: #333333;
    border-radius: 16px;
    padding: 21px 32px;
    margin-bottom: 15px;
    transition: transform 0.2s;

    &:hover{
        transform: translateX(10px);
        background: rgb(51, 51, 51, 0.7);
        cursor: pointer;
    }

  
`;

export const ProcessData = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #F4F4F4;
`;

export const ProcessName = styled.h1`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 41px;
    color: #FFFFFF;

`;

export const ProcessDone = styled.div`
    width: 64px;
    height: 24px;
    background: #1ABB29;
    border-radius: 8px;
`;

export const ProcessOnGoing = styled.div`
    width: 64px;
    height: 24px;
    background: #FCD328;
    border-radius: 8px;
`;

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const LeftSide = styled.div`
width: 50%;

`;

export const RightSide = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const NumberPanel = styled.h1<ColorProps>`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 110px;

    ${props => props.color === 'green' && css`
        color: #1ABB29;
    `}

    ${props => props.color === 'yellow' && css`
        color: #FCD328;
    `}
`;

export const ProcessType = styled.p<ColorProps>`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 20px;

    ${props => props.color === 'green' && css`
        color: #1ABB29;
    `}

    ${props => props.color === 'yellow' && css`
        color: #FCD328;
    `}
`;

export const SquareContainer = styled.div`
    display: flex;
`;