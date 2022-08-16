import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideosMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const SidebarAndSavedVideosPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const SavedVideosMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
`
export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoSavedImage = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 350px;
  }
`
export const NoSavedHead = styled.h1`
  font-family: roboto;
  font-size: 25px;
  font-weight: 700;
  color: ${props => props.titleColor};
`
export const NoSavedText = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: ${props => props.color};
`

export const SavedVideosHeader = styled.div`
  background-color: ${props => props.headerBg};
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0px 10px 20px;
`
export const SavedIcon = styled.div`
  background-color: ${props => props.iconBg};
  border-radius: 100%;
  padding: 20px;
  margin-right: 15px;
`
export const SavedHead = styled.h1`
  font-family: roboto;
  font-size: 30px;
  color: ${props => props.titleColor};
  font-weight: 600;
`
export const SavedVideosUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 0px;
  }
`
export const SavedLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  margin: 10px 0px 15px 10px;
`

export const SavedVideoItem = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 575px) {
    flex-direction: row;
  }
`
export const SavedContent = styled.div`
  display: flex;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const SavedVideoPic = styled.img`
  max-width: 400px;
  margin-right: 15px;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`
export const SavedVideoText = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 575px) {
    flex-direction: row;
  }
`

export const SavedTitle = styled.p`
  color: ${props => props.titleColor};
  font-family: roboto;
  font-size: 15px;
  font-weight: 600;
`
export const SavedText = styled.p`
  color: ${props => props.color};
  font-family: roboto;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`
export const SavedSmall = styled.div`
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
  }
`

export const ViewsAndPublishDetails = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  margin-top: 10px;
  @media screen and (min-width: 575px) {
    display: none;
  }
`
export const ViewsAndPublishDetailsSmall = styled.div`
  display: flex;
  align-items: center;
`
