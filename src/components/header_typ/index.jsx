import React from 'react'
import HashtagSection from '../../components/hashtag-section/'
import { HeaderTypSection } from '../../styles/styled-components'
import { motion } from 'framer-motion'

const HeaderTyp = props => {
    return (
        <HeaderTypSection>
            <div>
                <h2>{props.title}</h2>
            </div>
            <iframe width="560" height="315" src={props.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div>
                <motion.a href={props.urlTelegram} target="_blank" >
                    <motion.button style={props.styleBtnTelegram} whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                        whileTap={{ scale: 0.9 }}>{props.ctaTelegram}</motion.button>
                </motion.a>
                <motion.a href={props.urlYoutube} target="_blank">
                    <motion.button style={props.styleBtnYoutube} whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                        whileTap={{ scale: 0.9 }}>{props.ctaYoutube}</motion.button>
                </motion.a>
            </div>
            <HashtagSection />
        </HeaderTypSection>
    )
}

export default HeaderTyp