import {formatDistanceToNowStrict} from 'date-fns'

import {GoPrimitiveDot} from 'react-icons/go'

import VideoContext from '../../context/VideoContext'

import {
  HomeLink,
  HomeCardItem,
  HomeThumbnail,
  ChannelLogoAndText,
  ChannelText,
  ChannelLogo,
  HomeVideoTitle,
  ViewsAndPublishDetails,
  ChannelName,
  Text,
} from './styledComponents'

const HomeItems = props => (
  <VideoContext.Consumer>
    {value => {
      const {darkTheme} = value
      const titleColor = darkTheme ? '#ffffff' : '#323f4b'
      const textColor = '#616e7c'
      const {videoDetails} = props

      const {
        id,
        thumbnailUrl,
        title,
        channel,
        viewCount,
        publishedAt,
      } = videoDetails

      const publishDetails = formatDistanceToNowStrict(new Date(publishedAt), {
        addSuffix: true,
      })

      return (
        <HomeLink to={`/videos/${id}`}>
          <HomeCardItem>
            <HomeThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <ChannelLogoAndText>
              <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
              <ChannelText>
                <HomeVideoTitle titleColor={titleColor}>{title}</HomeVideoTitle>
                <ChannelName textColor={textColor}>{channel.name}</ChannelName>
                <ViewsAndPublishDetails>
                  <Text textColor={textColor}>{viewCount} views</Text>
                  <GoPrimitiveDot color="#909090" />
                  <Text textColor={textColor}>{publishDetails}</Text>
                </ViewsAndPublishDetails>
              </ChannelText>
            </ChannelLogoAndText>
          </HomeCardItem>
        </HomeLink>
      )
    }}
  </VideoContext.Consumer>
)

export default HomeItems
