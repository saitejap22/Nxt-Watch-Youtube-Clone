import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  margin: 10px 5px 15px;
  @media screen and (min-width: 576px) {
    min-width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`
export const HomeCardItem = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const HomeThumbnail = styled.img`
  width: 100%;
`

export const ChannelLogoAndText = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-top: 5px;
`
export const ChannelText = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelLogo = styled.img`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const HomeVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin: 2px;
  color: ${props => props.titleColor};
`
export const ChannelName = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 10px;
  margin: 2px;
  @media screen and (min-width: 768px) {
    font-size: 11px;
  }
`
export const ViewsAndPublishDetails = styled.div`
  display: flex;
  align-items: center;
`
export const Text = styled(ChannelName)`
  font-size: 9px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`
