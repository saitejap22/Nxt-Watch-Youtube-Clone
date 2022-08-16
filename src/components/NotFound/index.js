import VideoContext from '../../context/VideoContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  NotFoundContainer,
  SidebarAndNotFoundContent,
  NotFoundContent,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <VideoContext.Consumer>
    {value => {
      const {darkTheme} = value
      const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
      const color = darkTheme ? '#ffffff' : '#323f4b'
      const imageUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer bgColor={bgColor}>
          <Header />
          <SidebarAndNotFoundContent>
            <Sidebar />
            <NotFoundContent>
              <NotFoundImage src={imageUrl} alt="not found" />
              <NotFoundHeading color={color}>Page Not Found</NotFoundHeading>
              <NotFoundText>
                we are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContent>
          </SidebarAndNotFoundContent>
        </NotFoundContainer>
      )
    }}
  </VideoContext.Consumer>
)
export default NotFound
