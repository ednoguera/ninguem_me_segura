import React from 'react'
import Header from '../../components/header/'
import miniPc from '../../components/assets/img/icons/mini-pc.svg'
import thumb from '../../components/assets/img/banner/img-header.png'

const Home = () => {
    return (
        <>
            <Header title="Receba avisos das melhores aulas de programação para você entrar na carreira do futuro, ser disputado por empresas e ganhar 5x mais, mesmo sem conhecimento prévio e sem recursos para investir." getImage={miniPc} subTitle="Lives toda segunda, quarta e sexta às 17h" thumb={thumb} />
            <h1>Home</h1>
        </>
    )
}

export default Home