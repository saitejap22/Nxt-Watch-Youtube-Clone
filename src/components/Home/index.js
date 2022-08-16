import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'

import VideoContext from '../../context/VideoContext'
import Header from '../Header'
import Banner from '../Banner'
import Sidebar from '../Sidebar'
import HomeItems from '../HomeItems'
import {
  HomeContainer,
  SidebarAndVideos,
  VideosContainer,
  LoaderContainer,
  FailureViewContainer,
  FailImage,
  FailHeading,
  FailText,
  SearchDiv,
  SearchBarContainer,
  SearchButton,
  SearchInput,
  RetryButton,
  HomeVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INTIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    showBanner: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosUrl, options)
    if (response.ok === true) {
      const fetchedVideos = await response.json()
      const updatedData = fetchedVideos.videos.map(video => ({
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedData,
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

  onClickRetryButton = () => {
    this.getVideos()
  }

  renderFailureView = () => (
    <VideoContext.Consumer>
      {value => {
        const {darkTheme} = value
        const bgColor = darkTheme ? '#181818' : '#f9f9f9'
        const color = darkTheme ? '#ffffff' : '#323f4b'
        const failureImgUrl = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer bgColor={bgColor}>
            <FailImage src={failureImgUrl} alt="failure view" />
            <FailHeading color={color}>Oops! Something Went Wrong</FailHeading>
            <FailText>
              We are having some trouble to complete your request. <br />
              Please try again.
            </FailText>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  renderNoSearchResultsView = () => (
    <VideoContext.Consumer>
      {value => {
        const {darkTheme} = value
        const bgColor = darkTheme ? '#181818' : '#f9f9f9'
        const color = darkTheme ? '#ffffff' : '#323f4b'
        return (
          <FailureViewContainer bgColor={bgColor}>
            <FailImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailHeading color={color}>No Search Results found</FailHeading>
            <FailText color={color}>
              Try different key words or remove search filter.
            </FailText>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  renderVideosList = () => {
    const {videosList} = this.state
    const showVideosList = videosList.length > 0
    return (
      <>
        {showVideosList ? (
          <HomeVideosContainer>
            {videosList.map(eachVideo => (
              <HomeItems key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </HomeVideosContainer>
        ) : (
          this.renderNoSearchResultsView()
        )}
      </>
    )
  }

  renderVideosListBasedOnAPIStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderVideosList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  onClickSearchButton = () => {
    this.getVideos()
  }

  renderSearchBar = () => {
    const {searchInput} = this.state
    return (
      <VideoContext.Consumer>
        {value => {
          const {darkTheme} = value
          const color = darkTheme ? '#f9f9f9' : '#b2b8b4'
          return (
            <SearchBarContainer>
              <SearchInput
                type="search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                color={color}
                onKeyDown={this.onEnterSearchInput}
                placeholder="Search"
              />
              <SearchButton
                type="button"
                onClick={this.onClickSearchButton}
                data-testid="searchButton"
              >
                <BsSearch />
              </SearchButton>
            </SearchBarContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }

  render() {
    const {showBanner} = this.state

    return (
      <VideoContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#181818' : '#f9f9f9'
          return (
            <HomeContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <SidebarAndVideos>
                <Sidebar />
                <VideosContainer bgColor={bgColor}>
                  {showBanner && <Banner onCloseBanner={this.onCloseBanner} />}
                  <SearchDiv>{this.renderSearchBar()}</SearchDiv>
                  {this.renderVideosListBasedOnAPIStatus()}
                </VideosContainer>
              </SidebarAndVideos>
            </HomeContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Home
