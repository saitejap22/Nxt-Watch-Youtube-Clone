import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'

import VideoContext from '../../context/VideoContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingItems from '../GamingItems'
import {
  GamingViewContainer,
  GamingFailHeading,
  GamingFailImage,
  GamingFailText,
  GamingHeader,
  GamingRetryButton,
  LoaderContainer,
  GamingVideosUnorderedList,
  GamingVideosView,
  SidebarAndGamingVideos,
  GamingFailureViewContainer,
  GamingHeading,
  GamingIcon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const gamingApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  GamingRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => (
    <VideoContext.Consumer>
      {value => {
        const {darkTheme} = value
        const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
        const color = darkTheme ? '#ffffff' : '#323f4b'
        const failureImgUrl = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <GamingFailureViewContainer bgColor={bgColor}>
            <GamingFailImage src={failureImgUrl} alt="failure view" />
            <GamingFailHeading color={color}>
              Oops! Something Went Wrong
            </GamingFailHeading>
            <GamingFailText>
              We are having some trouble to complete your request. <br />
              Please try again.
            </GamingFailText>
            <GamingRetryButton type="button" onClick={this.GamingRetry}>
              Retry
            </GamingRetryButton>
          </GamingFailureViewContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  renderGamingVideosList = () => {
    const {gamingVideosList} = this.state
    return (
      <VideoContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <GamingVideosUnorderedList bgColor={bgColor}>
              {gamingVideosList.map(eachVideo => (
                <GamingItems key={eachVideo.id} gamingVideos={eachVideo} />
              ))}
            </GamingVideosUnorderedList>
          )
        }}
      </VideoContext.Consumer>
    )
  }

  renderFinalGamingView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderGamingVideosList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const headerBg = darkTheme ? '#181818' : ' #d7dfe9'
          const color = darkTheme ? '#ffffff' : '#000000'
          return (
            <GamingViewContainer data-testid="gaming" bgColor={bgColor}>
              <Header />
              <SidebarAndGamingVideos bgColor={bgColor}>
                <Sidebar />
                <GamingVideosView bgColor={bgColor}>
                  <GamingHeader headerBg={headerBg}>
                    <GamingIcon bgColor={bgColor}>
                      <SiYoutubegaming size="40" color="#ff0000" />
                    </GamingIcon>
                    <GamingHeading color={color}>Gaming</GamingHeading>
                  </GamingHeader>
                  {this.renderFinalGamingView()}
                </GamingVideosView>
              </SidebarAndGamingVideos>
            </GamingViewContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Gaming
