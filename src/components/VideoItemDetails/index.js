import {Component} from 'react'
import {formatDistanceToNowStrict} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {GoPrimitiveDot} from 'react-icons/go'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoContext from '../../context/VideoContext'
import {
  VideoItemDetailsContainer,
  SidebarAndVideoPlayer,
  VideoPlayerAndContent,
  LoaderContainer,
  VideoFailContainer,
  VideoFailImage,
  VideoFailHeading,
  VideoFailText,
  VideoRetryButton,
  VideoTitle,
  VideoStatsContainer,
  ViewsAndPublishDetails,
  VideoActions,
  VideoButton,
  ButtonText,
  Line,
  Text,
  ChannelLogo,
  ChannelLogoAndText,
  ChannelTextDetails,
  ChannelText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const videoDetailsApi = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(videoDetailsApi, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  VideoDetailsRetry = () => {
    this.getVideoDetails()
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
          <VideoFailContainer bgColor={bgColor}>
            <VideoFailImage src={failureImgUrl} alt="failure view" />
            <VideoFailHeading color={color}>
              Oops! Something Went Wrong
            </VideoFailHeading>
            <VideoFailText>
              We are having some trouble to complete your request. <br />
              Please try again.
            </VideoFailText>
            <VideoRetryButton type="button" onClick={this.VideoDetailsRetry}>
              Retry
            </VideoRetryButton>
          </VideoFailContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  renderVideoItemDetails = () => (
    <VideoContext.Consumer>
      {value => {
        const {darkTheme, onClickSaveButton} = value
        const {videoDetails, isLiked, isDisliked, isSaved} = this.state
        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          channel,
          description,
        } = videoDetails

        const titleColor = darkTheme ? '#ffffff' : '#323f4b'
        const publishDate = formatDistanceToNowStrict(new Date(publishedAt), {
          addSuffix: true,
        })

        const onClickLikeButton = () => {
          this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            isDisliked: false,
          }))
        }

        const OnClickDislikeButton = () => {
          this.setState(prevState => ({
            isDisliked: !prevState.isDisliked,
            isLiked: false,
          }))
        }

        const saveButtonClicked = () => {
          this.setState(prevState => ({
            isSaved: !prevState.isSaved,
          }))
          onClickSaveButton(videoDetails)
        }

        return (
          <>
            <ReactPlayer url={videoUrl} width="100%" height="60vh" controls />
            <VideoTitle titleColor={titleColor}>{title}</VideoTitle>
            <VideoStatsContainer>
              <ViewsAndPublishDetails>
                <Text>{viewCount} views</Text>
                <GoPrimitiveDot size={10} color="909090" />
                <Text>{publishDate}</Text>
              </ViewsAndPublishDetails>
              <VideoActions>
                <VideoButton
                  type="button"
                  onClick={onClickLikeButton}
                  color={isLiked ? '#2563eb' : '#64748b'}
                >
                  <BiLike size="15" />
                  <ButtonText color={isLiked ? '#2563eb' : '#64748b'}>
                    Like
                  </ButtonText>
                </VideoButton>
                <VideoButton
                  type="button"
                  color={isDisliked ? '#2563eb' : '#64748b'}
                  onClick={OnClickDislikeButton}
                >
                  <BiDislike size="15" />
                  <ButtonText color={isDisliked ? '#2563eb' : '#64748b'}>
                    Dislike
                  </ButtonText>
                </VideoButton>
                <VideoButton
                  type="button"
                  color={isSaved ? '#2563eb' : '#64748b'}
                  onClick={saveButtonClicked}
                >
                  <MdPlaylistAdd size="15" />
                  <ButtonText color={isSaved ? '#2563eb' : '#64748b'}>
                    {isSaved ? 'Saved' : 'Save'}
                  </ButtonText>
                </VideoButton>
              </VideoActions>
            </VideoStatsContainer>
            <Line />
            <ChannelLogoAndText>
              <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
              <ChannelTextDetails>
                <ChannelText>{channel.name}</ChannelText>
                <ChannelText>{channel.subscriberCount} subscribers</ChannelText>
                <VideoTitle titleColor={titleColor}>{description}</VideoTitle>
              </ChannelTextDetails>
            </ChannelLogoAndText>
          </>
        )
      }}
    </VideoContext.Consumer>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderVideoItemDetails()
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
          const bgColor = darkTheme ? '#0f0f0f' : ' #f9f9f9'
          return (
            <VideoItemDetailsContainer
              data-testid="videoItemDetails"
              bgColor={bgColor}
            >
              <Header />
              <SidebarAndVideoPlayer>
                <Sidebar />
                <VideoPlayerAndContent>
                  {this.renderFinalView()}
                </VideoPlayerAndContent>
              </SidebarAndVideoPlayer>
            </VideoItemDetailsContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}
export default VideoItemDetails
