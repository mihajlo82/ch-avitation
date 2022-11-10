import styled from 'styled-components';

export const StyledList = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    margin-top: 3px;
    max-height: 330px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 8px;
        height:8px;
      }
      
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
        width: 30px;
      }
      
    ::-webkit-scrollbar-thumb {
        background: #f54242;
        border-radius: 10px;
        width: 40px;
      }
`;

export const StyledItem = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:flex-start;
    background-color:white;
    opacity:${(props) => !!props.res ? '0.5' : '1'};
    &:hover {
        background-color: lightgray;
      }
`;

export const ItemPara = styled.p`
    color: black;
    font-weight: bold;
    margin-left: 15px;
`;