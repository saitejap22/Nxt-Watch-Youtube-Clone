import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'

import VideoContext from '../../context/VideoContext'

import {
  MobileLogout,
  MobileLogoutIcon,
  LogoutText,
  LogoutContainer,
  LogoutWarning,
  PopupButton,
  PopupOutlineButton,
  PopupButtonsContainer,
} from './styledComponents'

const Logout = props => (
  <VideoContext.Consumer>
    {value => {
      const {darkTheme} = value
      const color = darkTheme ? '#ffffff' : '#070705'
      const bgColor = darkTheme ? '#212121' : '#f9f9f9'
      const borderColor = darkTheme ? '#ffffff' : '#378ff3'
      const overlayStyle = {background: 'rgba(0,0,0,0.5)'}

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <Popup
          modal
          trigger={
            <MobileLogout type="button" color={color}>
              <MobileLogoutIcon>
                <FiLogOut size={25} color={color} />
              </MobileLogoutIcon>

              <LogoutText borderColor={borderColor}>Logout</LogoutText>
            </MobileLogout>
          }
          className="popup-content"
          overlayStyle={overlayStyle}
        >
          {close => (
            <LogoutContainer bgColor={bgColor}>
              <LogoutWarning borderColor={borderColor}>
                Are you sure, you want to logout
              </LogoutWarning>
              <PopupButtonsContainer>
                <PopupOutlineButton type="button" onClick={() => close()}>
                  Cancel
                </PopupOutlineButton>
                <PopupButton type="button" onClick={onClickLogout}>
                  Confirm
                </PopupButton>
              </PopupButtonsContainer>
            </LogoutContainer>
          )}
        </Popup>
      )
    }}
  </VideoContext.Consumer>
)

export default withRouter(Logout)
