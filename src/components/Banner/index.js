import {MdClose} from 'react-icons/md'

import {
  BannerContainer,
  LogoAndCloseButton,
  Content,
  WebsiteLogo,
  BannerHeading,
  BannerButton,
  CloseButton,
} from './styledComponents'

const Banner = props => {
  const {onCloseBanner} = props
  return (
    <BannerContainer data-testid="banner">
      <LogoAndCloseButton>
        <Content>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerHeading>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerHeading>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </Content>
        <CloseButton type="button" onClick={onCloseBanner} data-testid="close">
          <MdClose size="20" />
        </CloseButton>
      </LogoAndCloseButton>
    </BannerContainer>
  )
}

export default Banner
