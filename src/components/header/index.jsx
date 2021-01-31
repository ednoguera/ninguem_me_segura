import React, { useEffect } from "react"
import { FormContainer, HeaderApp, TitleContainer, SubTitleContainer, ThumbHeader } from '../../styles/styled-components'
import HubspotForm from 'react-hubspot-form'
import Subscribe from '../../helper/subscribe'
import styled from 'styled-components'



const Header = (props) => {

    return (
        <HeaderApp>
            <div>
                <TitleContainer>
                    <p>{props.title}</p>
                </TitleContainer>
                <FormContainer>
                    {
                        <Subscribe />
                    }
                    <SubTitleContainer>
                        <img src={props.getImage} />
                        <p>{props.subTitle}</p>
                    </SubTitleContainer>
                </FormContainer>
            </div>
            <ThumbHeader>
                <img src={props.thumb} />
            </ThumbHeader>
        </HeaderApp>
    )
}

export default Header

const NewHubspotForm = styled(HubspotForm)`
    width: 600px;

    button {
        width: 500px;
    }

    @media (min-width: 320px) and (max-width: 375px) {
        width: 250px;
    }
`