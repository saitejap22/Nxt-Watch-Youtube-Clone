import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'

import VideoContext from '../../context/VideoContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingItems from '../TrendingItems'
import {
  TrendingViewContainer,
  SidebarAndTrendingVideos,
  TrendingVideosView,
  TrendingHeader,
  TrendingIcon,
  TrendingHeading,
  TrendingVideosUnorderedList,
  TrendingFailureViewContainer,
  TrendingFailHeading,
  TrendingFailImage,
  TrendingFailText,
  TrendingRetryButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideos: updatedData,
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

  TrendingRetry = () => {
    this.getTrendingVideos()
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
          <TrendingFailureViewContainer bgColor={bgColor}>
            <TrendingFailImage src={failureImgUrl} alt="failure view" />
            <TrendingFailHeading color={color}>
              Oops! Something Went Wrong
            </TrendingFailHeading>
            <TrendingFailText>
              We are having some trouble to complete your request. <br />
              Please try again.
            </TrendingFailText>
            <TrendingRetryButton type="button" onClick={this.TrendingRetry}>
              Retry
            </TrendingRetryButton>
          </TrendingFailureViewContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  renderTrendingVideosList = () => {
    const {trendingVideos} = this.state
    return (
      <VideoContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <TrendingVideosUnorderedList bgColor={bgColor}>
              {trendingVideos.map(eachVideo => (
                <TrendingItems key={eachVideo.id} videoDetails={eachVideo} />
              ))}
            </TrendingVideosUnorderedList>
          )
        }}
      </VideoContext.Consumer>
    )
  }

  renderFinalTrendingView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderTrendingVideosList()
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
            <TrendingViewContainer data-testid="trending" bgColor={bgColor}>
              <Header />
              <SidebarAndTrendingVideos bgColor={bgColor}>
                <Sidebar />
                <TrendingVideosView bgColor={bgColor}>
                  <TrendingHeader headerBg={headerBg}>
                    <TrendingIcon bgColor={bgColor}>
                      <HiFire size="40" color="#ff0000" />
                    </TrendingIcon>
                    <TrendingHeading color={color}>Trending</TrendingHeading>
                  </TrendingHeader>
                  {this.renderFinalTrendingView()}
                </TrendingVideosView>
              </SidebarAndTrendingVideos>
            </TrendingViewContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Trending
