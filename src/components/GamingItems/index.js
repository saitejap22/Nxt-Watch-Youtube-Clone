import VideoContext from '../../context/VideoContext'
import {
  GamingLink,
  GamingItem,
  GamingThumbnail,
  GamingTitle,
  GamingText,
} from './styledComponents'

const GamingItems = props => (
  <VideoContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {gamingVideos} = props
      const {id, title, thumbnailUrl, viewCount} = gamingVideos
      const color = darkTheme ? '#ffffff' : '#323f4b'
      return (
        <GamingLink to={`/videos/${id}`}>
          <GamingItem>
            <GamingThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <GamingTitle color={color}>{title}</GamingTitle>
            <GamingText>{viewCount} Watching Worldwide</GamingText>
          </GamingItem>
        </GamingLink>
      )
    }}
  </VideoContext.Consumer>
)
export default GamingItems
