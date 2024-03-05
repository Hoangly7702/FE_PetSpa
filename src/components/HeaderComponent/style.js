import styled from 'styled-components';

import { Row,Col } from 'antd';

export const WrappedHeader = styled(Row)`
    padding:12px 120px;
    background-color:#fff;
    // background-color: rgb(167, 167, 167);
`

// export const WrappedSearch = styled(Col)`
//     color:green;
//     bolder-radius:20px;
// `

export const WrappedLogo = styled.span`
    font-size:2rem;
    font-family:Parkavenue, cursive;
    font-weight:bold;
    color:#a77d44;
    text-align:left;
    margin-right:30px;
    
`

export const Wrapped = styled.div`
    font-family: 'AntTeam', sans-serif;
    font-size: 16px;
    // max-width:1400px;
`


export const WrappedHeaderText = styled(Col)`
    font-size: 16px;
    padding-left:10%;
    
    line-height: 40px;
    border-bottom: 1px solid #e5e5e5;
    
`

export const WrappedFlex = styled.div`
    display: flex;
    margin-left:30px;
`

export const WrappedIcon = styled.div`
   font-size:1.5rem;
   margin-left:10px;
   

`


export const WrappedJustified = styled(Col)`
   
   
`

export const WrappedNav = styled.div`
    padding-left:10%;
    padding-right:10%;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:728px){
        &{
            text-align:center;
            align-items:center; 
   
`