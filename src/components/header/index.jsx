import React from "react"
import { FormContainer, HeaderApp, TitleContainer, SubTitleContainer, ThumbHeader } from '../../styles/styled-components'
import HubspotForm from 'react-hubspot-form'
import styled from 'styled-components'



const Header = (props) => {
    return (
        <HeaderApp>
            <div>
                <TitleContainer>
                    <p>{props.title}</p>
                </TitleContainer>
                <FormContainer>
                    <NewHubspotForm
                        portalId='6600573'
                        formId='e975bc32-753f-492b-b9c6-d5d45545e106'
                        onSubmit={() => console.log('Submit!')}
                        onReady={(form) => console.log('Form ready!')}
                        loading={<div>Loading...</div>}
                    />
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
`