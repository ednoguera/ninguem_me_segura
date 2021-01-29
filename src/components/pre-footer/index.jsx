import React from 'react'
import { PreFooterSection, TitleContainer, PreFooterGroup } from '../../styles/styled-components'
import TitleImg from '../title-img/'
import Dani from '../assets/img/icons/dani/dani.png'
import HashtagSection from '../../components/hashtag-section/'

const PreFooter = (props) => {
    return (
        <PreFooterSection>
            <PreFooterGroup>
                <TitleContainer>
                    <p>{props.title}</p>
                </TitleContainer>
                <TitleImg img={Dani} title="Daniel Kriger é CEO e co-fundador da Kenzie Academy, conhecido por colocar pessoas no mercado de tecnologia rapidamente, através de um novo modelo de ensino. Já ajudou dezenas de estudantes a mudarem de carreira e seu grande objetivo é transformar a vida de pessoas que querem aprender programação para conquistar vagas e bons salários no mercado de tecnologia." />
                <HashtagSection />
            </PreFooterGroup>
        </PreFooterSection>
    )
}

export default PreFooter