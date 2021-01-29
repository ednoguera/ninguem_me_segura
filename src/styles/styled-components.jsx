import styled from 'styled-components'

const HeaderApp = styled.header`
    height: 594px;
    background-color: #121212;
    display: flex;
    flex-direction: row;
    justify-content: center;
`


const FormContainer = styled.div`
    width: 560px;
    /*padding-left: 155px;
    padding-top: 20px;*/
    
`

const TitleContainer = styled.div`
    height: 242px;
    /*padding-top: 50px;
    padding-left: 155px;*/
    width: 560px;
    
    
    p {
        font-size: 30px;
        color: #fff;
        text-align: left;
        font-weight: bold;
    }
`

const SubTitleContainer = styled.div`
    display: flex;
    width: 350px;
    
    img {
        
    }

    p {
        text-align: left;
        color: #fff;
        font-size: 18px;
        padding-left: 30px;
    }
`

const ThumbHeader = styled.figure`
    padding-top: 2.5%;
`

export {
    FormContainer,
    HeaderApp,
    TitleContainer,
    SubTitleContainer,
    ThumbHeader
}