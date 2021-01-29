import React from 'react'
import Header from '../../components/header/'
import miniPc from '../../components/assets/img/icons/mini-pc.svg'
import thumb from '../../components/assets/img/banner/img-header.png'
import IconSection from '../../components/icon-section/'
import PreFooter from '../../components/pre-footer/'
import { PageHome } from '../../styles/styled-components'

const Home = () => {
    return (
        <PageHome>
            <Header title="Receba avisos das melhores aulas de programação para você entrar na carreira do futuro, ser disputado por empresas e ganhar 5x mais, mesmo sem conhecimento prévio e sem recursos para investir." getImage={miniPc} subTitle="Lives toda segunda, quarta e sexta às 17h" thumb={thumb} />
            <IconSection />
            <PreFooter title="Aulas ao vivo, toda semana, com dicas práticas e segredos que ninguém te conta para você ser uma pessoa programadora de sucesso, disputada pelo mercado, na área de programação." />
        </PageHome>
    )
}

export default Home