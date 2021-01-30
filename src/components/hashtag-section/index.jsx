import React from 'react'
import Hashtag from './hashtag'
import { HashSection } from '../../styles/styled-components'


const HashtagSection = () => {
    return (
        <HashSection>
            <Hashtag tag="KENZIEMADE" />
            <Hashtag tag="SOUKENZIE" />
            <Hashtag tag="NINGUEMMESEGURA" />
        </HashSection>
    )
}

export default HashtagSection