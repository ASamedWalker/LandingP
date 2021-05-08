import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"
import { Button } from '../../globalStyles';
import { 
    FooterContainer, 
    FooterSubscription,
    FooterSubText,
    FooterSubHeading,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinksItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialIcon
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your email" />
                    <Button fontBig>Suscribe</Button>
                </Form>
            </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>COMPANY</FooterLinkTitle>
                            <FooterLink to="/sign-up"> About </FooterLink>
                            <FooterLink to="/sign-up"> Careers </FooterLink>
                            <FooterLink to="/sign-up"> Investors </FooterLink>
                            <FooterLink to="/sign-up"> Terms of Service </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>COMMUNITIES</FooterLinkTitle>
                            <FooterLink to="/sign-up"> For Artists </FooterLink>
                            <FooterLink to="/sign-up"> Developers </FooterLink>
                            <FooterLink to="/sign-up"> Advertising </FooterLink>
                            <FooterLink to="/sign-up"> Vendors </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>SOCIAL</FooterLinkTitle>
                            <FooterLink to="/sign-up"> Twitter </FooterLink>
                            <FooterLink to="/sign-up"> linkedIn  </FooterLink>
                            <FooterLink to="/sign-up"> Facebook </FooterLink>
                            <FooterLink to="/sign-up"> Youtube </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <SocialIcon />
                            VIBE
                            </SocialLogo>
                            <WebsiteRights>VIBE © 2021</WebsiteRights>
                            <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;
