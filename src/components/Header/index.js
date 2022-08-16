import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'

import VideoContext from '../../context/VideoContext'
import Logout from '../Logout'
import LinksSmall from '../LinksSmall'
import {
  HamButton,
  PopupLinksContainer,
  CloseButton,
  HeaderLogo,
  HeaderContainer,
  HeaderMenu,
  ThemeButton,
  Avatar,
} from './styledComponents'

const Header = () => (
  <VideoContext.Consumer>
    {value => {
      const {darkTheme, toggleTheme} = value
      const color = darkTheme ? '#ffffff' : '#070705'
      const bgColor = darkTheme ? '#212121' : '#ffffff'

      const renderHamburgerPopup = () => (
        <Popup
          modal
          trigger={
            <HamButton>
              <GiHamburgerMenu size={30} color={color} />
            </HamButton>
          }
        >
          {close => (
            <PopupLinksContainer bgColor={bgColor}>
              <CloseButton onClick={() => close()}>
                <MdClose size={28} color={color} />
              </CloseButton>
              <LinksSmall />
            </PopupLinksContainer>
          )}
        </Popup>
      )

      return (
        <HeaderContainer bgColor={bgColor}>
          <Link to="/">
            <HeaderLogo
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <HeaderMenu>
            <ThemeButton onClick={toggleTheme} data-testid="theme">
              {darkTheme ? (
                <FiSun size={25} color={color} />
              ) : (
                <FaMoon size={25} color={color} />
              )}
            </ThemeButton>
            {renderHamburgerPopup()}
            <Avatar
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Logout />
          </HeaderMenu>
        </HeaderContainer>
      )
    }}
  </VideoContext.Consumer>
)
export default Header
