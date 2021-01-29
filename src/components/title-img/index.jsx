import React from 'react'
import { TitleImgContainer, Divisor } from '../../styles/styled-components'

const TitleImg = (props) => {
    return (
        <TitleImgContainer>
            <Divisor />
            <figure>
                <img src={props.img} />
            </figure>
            <div>
                <p>{props.title}</p>
            </div>
        </TitleImgContainer>
    )
}

export default TitleImg