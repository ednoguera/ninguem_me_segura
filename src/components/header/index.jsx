import React from "react"
import { FormContainer, HeaderApp, TitleContainer, SubTitleContainer, ThumbHeader } from '../../styles/styled-components'
import Subscribe from '../../helper/subscribe'
import ActiveCampForm from '../../components/active_campaign_form/'



const Header = (props) => {

    return (
        <HeaderApp>
            <div>
                <TitleContainer>
                    <p>{props.title}</p>
                </TitleContainer>
                <FormContainer>
                    {
                        // <Subscribe />
                    }
                    <ActiveCampForm />
                    <div class="_form_1">teste</div><script src="https://kenzie80793.activehosted.com/f/embed.php?id=1" type="text/javascript" charset="utf-8"></script>
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