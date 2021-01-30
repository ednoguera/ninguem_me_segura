import React from 'react'
import Header from '../../components/header/'
import miniPc from '../../components/assets/img/icons/mini-pc.svg'
import thumb from '../../components/assets/img/banner/img-header.png'
import IconSection from '../../components/icon-section/'
import PreFooter from '../../components/pre-footer/'
import Footer from '../../components/footer/'
import { PageHome } from '../../styles/styled-components'
import logo from '../../components/assets/img/logo/logo.svg'
import instagram from '../../components/assets/img/social/insta.png'
import youtube from '../../components/assets/img/social/youtube.png'
import linkedin from '../../components/assets/img/social/linkedin.png'

const Home = () => {
    return (
        <PageHome>
            <Header title="Receba avisos das melhores aulas de programação para você entrar na carreira do futuro, ser disputado por empresas e ganhar 5x mais, mesmo sem conhecimento prévio e sem recursos para investir." getImage={miniPc} subTitle="Lives toda segunda, quarta e sexta às 17h" thumb={thumb} />
            <IconSection />
            <PreFooter title="Aulas ao vivo, toda semana, com dicas práticas e segredos que ninguém te conta para você ser uma pessoa programadora de sucesso, disputada pelo mercado, na área de programação." />
            <Footer logo={logo} instagram={instagram} youtube={youtube} linkedin={linkedin} copyrights="Copyrights 2020 Kenzie All right Reserved" />
        </PageHome>
    )
}

export default Home