import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 20px 20px 10px;
  background-color: ${props => props.bgColor};
  @media (min-width: 768px) {
    padding: 20px 30px 25px 30px;
  }
`
export const HeaderLogo = styled.img`
  width: 120px;
  @media (min-width: 768px) {
    width: 130px;
  }
`
export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
`
export const HamButton = styled(ThemeButton)`
  @media (min-width: 768px) {
    display: none;
  }
`

export const PopupLinksContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`
export const CloseButton = styled(ThemeButton)`
  margin-bottom: 20px;
  margin-top: 10px;
  align-self: flex-end;
`
export const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
`
export const Avatar = styled.img`
  width: 25px;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
