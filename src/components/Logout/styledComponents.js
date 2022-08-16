import styled from 'styled-components'

export const LogoutContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`
export const LogoutWarning = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.borderColor};
  margin: 0 0 20px 0;
`
export const PopupButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 16px 0 0 0;
`
export const PopupButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: #2082f2;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 6px;
  font-weight: bold;
`
export const PopupOutlineButton = styled(PopupButton)`
  background-color: transparent;
  border: 1.5px solid #93a4b8;
  color: #93a4b8;
`
export const MobileLogout = styled.button`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 80px;
    height: 30px;
  }
`
export const MobileLogoutIcon = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoutText = styled.p`
  color: ${props => props.borderColor};
  border: 2px solid ${props => props.borderColor};
  border-radius: 6px;
  padding: 3px 14px;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
  @media (max-width: 767px) {
    display: none;
  }
`
