import React from 'react'
import HeaderTyp from '../../components/header_typ/'
import Footer from '../../components/footer/'
import logo from '../../components/assets/img/logo/logo.svg'
import instagram from '../../components/assets/img/social/insta.png'
import youtube from '../../components/assets/img/social/youtube.png'
import linkedin from '../../components/assets/img/social/linkedin.png'


const ThankYouPage = () => {

    const url = "https://www.youtube.com/embed/E9HUaPeDY24"

    const youtubeChannel = "https://www.youtube.com/c/KenzieAcademyBrasil"
    const telegramEvent = "https://t.me/semanaZeroAoJS"

    const colors = {
        "cian": "#00D3F6",
        "purple": "#A337CB"
    }

    return (
        <>
            <HeaderTyp title="SIGA OS PASSOS ABAIXO PARA CONFIRMAR SUA PARTICIPAÇÃO" url={url} urlYoutube={youtubeChannel} urlTelegram={telegramEvent} ctaTelegram="Entrar em nossa comunidade no telegram" ctaYoutube="Inscreva-se em nosso canal no Youtube"
                styleBtnTelegram={{
                    "backgroundColor": colors.cian
                }}
                styleBtnYoutube={{
                    "backgroundColor": colors.purple
                }} />
            <Footer logo={logo} instagram={instagram} youtube={youtube} linkedin={linkedin} copyrights="Copyrights 2020 Kenzie All right Reserved" />
        </>
    )
}

export default ThankYouPage