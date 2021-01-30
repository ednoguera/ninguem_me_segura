import styled from 'styled-components'


const PageHome = styled.div`
    display: flex;
    flex-direction: column;
`

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

//PRE FOOTER SECTION

const PreFooterSection = styled.section`
    background-color: #121212;
    height: 505px;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    
`

const PreFooterGroup = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 1740px) {
        width: 100%;

        p {
            width: 70%;
        }
    }
`

const TitleImgContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    

    p {
        font-size: 18px;
        color: #fff;
        width: 500px;
    }
`

const Divisor = styled.div`
    width: 2px;
    height: 250px;
    margin: 5rem 0 0 0rem;
    background-color: #fff;

    @media (min-width: 1900px) and (max-width: 4000px) {
        margin: 5rem 0 0 4rem;
    }
`

const HashSection = styled.div`
    display: flex;
    margin: 1rem;
`

const HashStyle = styled.div`
    font-size: 30px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 0 2rem;
`

const TextContainer = styled.div`
    p {
        width: 380px;
        text-align: left;
    }
`


//FOOTER SECTION

const FooterSection = styled.footer`
    background-color: #171717;
    height: 327px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    div {
        margin: 10px;
    }
    
    p {
        color: #fff;
    }
`

export {
    FormContainer,
    HeaderApp,
    TitleContainer,
    SubTitleContainer,
    ThumbHeader,
    IconContainer,
    Section,
    PreFooterSection,
    PreFooterGroup,
    PageHome,
    TitleImgContainer,
    Divisor,
    HashSection,
    HashStyle,
    TextContainer,
    FooterSection
}