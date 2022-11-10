import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:space-between;
    background-color: ${(props) => !props.isActive ?  'white' :'lightgray'};
`;

export const TitleParent = styled.div`
    width: 75%;
    height:100%;
    display: flex;
    align-items: center;
    overflow-y: auto;
    position: relative;
    backgroundColor:green;
    padding:0 10px;
    ::-webkit-scrollbar {
        width: 10px;
        height:6px;
      }
      
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: red;
        border-radius: 10px;
      }
`;

export const Title = styled.p`
    margin-left: 10px;
    font-weight: bold;
    font-size:17px;
    color: ${(props) => props.isActive ?  'black' :'#666769'};
`;
