import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const SidebarAndNotFoundContent = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    padding-left: 450px;
  }
`
export const NotFoundImage = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 480px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: roboto;
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.color};
`
export const NotFoundText = styled.p`
  font-family: roboto;
  font-size: 16px;
  color: #909090;
  margin: 0;
  text-align: center;
`
