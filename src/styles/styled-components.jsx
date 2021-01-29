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


//ICON SECTION


const IconContainer = styled.div`
    width: 324px;
    height: 310px;
    border: 2px solid #969696;
    border-radius: 10px;
    opacity: 1;
    margin: 72px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 18px;
        color: #fff;
        width: 283px; 
    }
`

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 412px;
    background-color: #171717;
`

export {
    FormContainer,
    HeaderApp,
    TitleContainer,
    SubTitleContainer,
    ThumbHeader,
    IconContainer,
    Section
}