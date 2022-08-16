import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const TrendingVideoLink = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  width: 100%;
  margin-bottom: 12px;
  @media screen and (min-width: 576px) {
    margin: 0 0 64px 0;
  }
`
export const TrendingVideoCardItem = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const TrendingThumbnailImage = styled.img`
  width: 97%;
  @media screen and (min-width: 576px) {
    width: 50%;
    margin-right: 20px;
  }
`

export const TrendingLogoAndVideoTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 12px;
  margin-top: 12px;
  @media screen and (min-width: 576px) {
    align-items: flex-start;
    margin-top: 0;
    padding: 0;
  }
`

export const TrendingChannelLogo = styled.img`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  margin-right: 8px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TrendingThumbnailDetails = styled.div`
  width: 80%;
  @media screen and (min-width: 576px) {
    width: 100%;
  }
`

export const TrendingVideoCardHeading = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  color: ${props => (props.darkTheme ? '#ffffff' : '#323f4b')};
  @media screen and (min-width: 576px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ChannelViewCountAndPublishedAtContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #909090;
  padding: 0;
  margin: 0 6px 0 0;
  line-height: 1;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    line-height: 2;
    margin: 0;
  }
`

export const ViewCountAndPublishedLg = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const MiddleCircle01 = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #909090;
  padding: 0;
  margin: 0 6px 0 0;
  line-height: 1;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #909090;
  padding: 0;
  margin: 0 6px 0 0;
  line-height: 1;
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 9px;
  }
  @media screen and (min-width: 885px) {
    font-size: 12px;
  }
`
