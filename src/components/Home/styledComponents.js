import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: ${props => props.bgColor};
`
export const SidebarAndVideos = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent;
`
export const VideosSearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 30px;
  }
`

export const SearchDiv = styled.div`
  display: flex;
  padding: 20px 0px 10px 20px;
`

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  border: 1.5px solid #d1d1d1;
  @media (min-width: 768px) {
    max-width: 500px;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const SearchButton = styled.button`
  padding: 10px 30px;
  border: none;
  outline: none;
  cursor: pointer;
  border-left: 2px solid #d0d0d0;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 24px;
  background-color: ${props => props.bgColor};
`
export const FailImage = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 200px;
  }
`
export const FailHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const FailText = styled.p`
  text-align: center;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 60%;
  }
`

export const RetryButton = styled.button`
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
export const HomeVideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  margin: 0;
  @media screen and (min-width: 576px) {
    padding: 24px;
  }
`
