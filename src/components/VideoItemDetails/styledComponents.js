import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const SidebarAndVideoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`
export const VideoPlayerAndContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 10px 20px;
`

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoFailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 24px;
  background-color: ${props => props.bgColor};
`
export const VideoFailImage = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`
export const VideoFailHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const VideoFailText = styled.p`
  text-align: center;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  width: 90%;
  line-height: 1.3;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 60%;
  }
`

export const VideoRetryButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  padding: 12px 32px;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
  color: ${props => props.titleColor};
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ViewsAndPublishDetails = styled.div`
  display: flex;
  align-items: center;
`
export const Text = styled.p`
  font-size: 12px;
  color: #64748b;
  font-weight: 550;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
export const ButtonText = styled(Text)`
  margin-left: 2px;
  color: ${props => props.color};
`

export const VideoActions = styled.div`
  display: flex;
  align-items: center;
`
export const VideoButton = styled.button`
  outline: none;
  background: transparent;
  display: flex;
  cursor: pointer;
  align-items: center;
  border: none;
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.color};
`
export const Line = styled.hr`
  width: 100%;
  color: #64748b;
`

export const ChannelLogoAndText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const ChannelTextDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ChannelText = styled(Text)`
  margin: 0px;
  padding-bottom: 3px;
`
