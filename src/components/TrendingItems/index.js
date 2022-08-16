import {formatDistanceToNowStrict} from 'date-fns'

import {VscCircleFilled} from 'react-icons/vsc'

import VideoContext from '../../context/VideoContext'

import {
  TrendingVideoLink,
  TrendingVideoCardItem,
  TrendingThumbnailImage,
  TrendingLogoAndVideoTitleContainer,
  TrendingThumbnailDetails,
  TrendingVideoCardHeading,
  TrendingChannelLogo,
  ChannelName,
  MiddleCircle01,
  ViewCountAndPublishedLg,
  ChannelViewCountAndPublishedAtContainer,
  Text,
} from './styledComponents'

const TrendingItems = props => (
  <VideoContext.Consumer>
    {value => {
      const {darkTheme} = value

      const {videoDetails} = props

      const {
        id,
        thumbnailUrl,
        title,
        viewCount,
        channel,
        publishedAt,
      } = videoDetails
      const {name, profileImageUrl} = channel

      const exactDuration = formatDistanceToNowStrict(new Date(publishedAt), {
        addSuffix: true,
      })

      return (
        <TrendingVideoLink to={`/videos/${id}`}>
          <TrendingVideoCardItem>
            <TrendingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <TrendingLogoAndVideoTitleContainer>
              <TrendingChannelLogo src={profileImageUrl} alt="channel logo" />
              <TrendingThumbnailDetails>
                <TrendingVideoCardHeading darkTheme={darkTheme}>
                  {title}
                </TrendingVideoCardHeading>
                <ChannelViewCountAndPublishedAtContainer>
                  <ChannelName>{name}</ChannelName>
                  <ViewCountAndPublishedLg>
                    <MiddleCircle01>
                      <VscCircleFilled fill="#909090" position="center" />
                    </MiddleCircle01>
                    <Text>{viewCount} views</Text>
                    <Text>
                      <VscCircleFilled position="center" fill="#909090" />
                    </Text>
                    <Text>{exactDuration}</Text>
                  </ViewCountAndPublishedLg>
                </ChannelViewCountAndPublishedAtContainer>
              </TrendingThumbnailDetails>
            </TrendingLogoAndVideoTitleContainer>
          </TrendingVideoCardItem>
        </TrendingVideoLink>
      )
    }}
  </VideoContext.Consumer>
)

export default TrendingItems
