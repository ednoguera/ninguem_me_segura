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

    @media (min-width: 300px) and (max-width: 1024px) {
        flex-direction: column;
        height: 400px;

        img {
            display: none;
        }
    }
`


const FormContainer = styled.div`
    
    @media (min-width: 300px) and (max-width: 1024px) {
        padding-top: 0;
        height: 150px;
    }
    
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

    @media (min-width: 300px) and (max-width: 1024px) {
        width: 80%;
        height: 150px;
        margin: 0 auto;

        p {
            font-size: 16px;
            width: 280px;
            margin: 0 auto;
        }
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
        padding-left: 1rem;
    }

    @media (min-width: 300px) and (max-width: 1024px) {
        width: 300px;
        margin-bottom: 1rem;

        p {
            font-size: 14px;
            width: 300px;
            margin: 0 auto;
            padding-left: 0 auto;
        }
    }
`

const ThumbHeader = styled.figure`
    padding-top: 2.5%;
`


//ICON SECTION
const IconContainer = styled.div`
    width: 300px;
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

    @media (min-width: 300px) and (max-width: 1024px) {
       margin: 12px;
       width: 280px;
    }
`

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 412px;
    background-color: #171717;

    @media (min-width: 300px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        height: 800px;
    }
`

//PRE FOOTER SECTION

const PreFooterSection = styled.section`
    background-color: #121212;
    height: 505px;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 300px) and (max-width: 1024px) {
        flex-direction: column;
        height: 950px;
    }
    
`

const PreFooterGroup = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 300px) and (max-width: 1024px) {
        flex-direction: column;

        
    }

    @media (min-width: 426px) and (max-width: 1740px) {
        width: 100%;

        
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

    @media (min-width: 300px) and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        margin: 0;
        

        p {
            font-size: 16px;
            color: #fff;
            width: 300px;
            margin: 0 auto;
        }

        figure {
           margin: 1rem;
           padding: 40px 0 0 0;
        }
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

    @media (min-width: 300px) and (max-width: 1024px) {
        display: none;
    }
`

const HashSection = styled.div`
    display: flex;
    margin: 1rem;

    @media (min-width: 300px) and (max-width: 1024px) {
        flex-direction: column;
        margin: 0 auto;
    }
`

const HashStyle = styled.div`
    font-size: 30px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 0 2rem;

    @media (min-width: 300px) and (max-width: 1024px) {
        display: flex;
        font-size: 14px;
        margin: 0 auto;
    }
`

const TextContainer = styled.div`
    p {
        width: 380px;
        text-align: left;
    }

    @media (min-width: 300px) and (max-width: 1024px) {
        
        p {
            width: 280px;
        }
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

//HEADER TYP SECTION

const HeaderTypSection = styled.header`
    background-color: #121212;
    height: 718px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        color: #fff;
        font-size: 36px;
        text-align: center;
    }
    

    button {
        color: #fff;
        width: 300px;
        height: 64px;
        border-radius: 10px;
        border: none;
        outline: none;

        margin: 34px;
        font-size: 18px;
        font-weight: bold;
    }

    @media (min-width: 300px) and (max-width: 1024px) {
        height: 900px;

        h2 {
            font-size: 26px;
        }

        button {
            width: 70%;
        }
    }
`

//Form style settings
const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 300px) and (max-width: 1024px) {
        width: 100%;
        height: 250px;
        padding: 0;
    }
`

const Input = styled.input`
    height: 64px;
    margin: 0 0 1rem 0;
    border-radius: 10px;
    outline: none;
    font-size: 30px; 
    color: #fff;
    font-weight: bold;
    background-color: #3C3C3C;
    border: 2px solid #969696;
    width: 400px;

    @media (min-width: 300px) and (max-width: 1024px) {
        height: 52px;
        width: 294px;
        font-size: 20px;
        margin: 0 auto;
    }
`

const Button = styled.button`
    height: 64px;
    width: 410px;
    background-color: #A337CB;
    outline: none;
    border: none;
    background-color: #A337CB;
    border-radius: 10px;
    
    font-size: 20px;
    color: #fff;
    font-weight: bold;

    @media (min-width: 300px) and (max-width: 1024px) {
        height: 52px;
        width: 300px;
        margin: 1rem auto;
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
    FooterSection,
    HeaderTypSection,
    Form,
    Input,
    Button
}