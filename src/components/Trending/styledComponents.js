import styled from 'styled-components'

export const TrendingViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.bgColor};
  overflow-y: auto;
`
export const SidebarAndTrendingVideos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 90vh;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const TrendingVideosView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  width:100%
  justify-content: flex-start;
  background-color: ${props => props.headerBg};
  padding: 10px 0px 10px 60px ;
`
export const TrendingIcon = styled.div`
  border-radius: 100%;
  padding: 20px;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 20px;
  background-color: ${props => props.bgColor};
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  margin-left: 10px;
  color: ${props => props.color};
`
export const TrendingVideosUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 10px;
  margin: 0;
  padding-top: 20px;
`

export const TrendingFailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 24px;
  background-color: ${props => props.bgColor};
`
export const TrendingFailImage = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`
export const TrendingFailHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const TrendingFailText = styled.p`
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

export const TrendingRetryButton = styled.button`
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
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
