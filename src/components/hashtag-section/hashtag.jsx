import React from 'react'
import { HashStyle } from '../../styles/styled-components'


const Hashtag = props => {
    return (
        <HashStyle>
            <p>#{props.tag}</p>
        </HashStyle>
    )
}

export default Hashtag