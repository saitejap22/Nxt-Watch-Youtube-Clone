import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  padding: 24px;
  background-size: cover;
  height: 30vh;
  width: 100%;
`
export const LogoAndCloseButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const WebsiteLogo = styled.img`
  height: 40px;
  width: 160px;
`
export const BannerHeading = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18;
`
export const BannerButton = styled.button`
  border: 1px solid #231f20;
  color: #231f20;
  background-color: transparent;
  padding: 8px 16px;
  align-self: flex-start;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
`
export const CloseButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0px;
`
