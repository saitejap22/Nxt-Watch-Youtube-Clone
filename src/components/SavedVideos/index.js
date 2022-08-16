import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoContext from '../../context/VideoContext'
import {
  SavedVideosMainContainer,
  SidebarAndSavedVideosPage,
  SavedVideosMain,
  NoSavedContainer,
  NoSavedImage,
  NoSavedHead,
  NoSavedText,
  SavedVideosHeader,
  SavedIcon,
  SavedHead,
  SavedVideosUnorderedList,
  SavedLink,
  SavedVideoItem,
  SavedContent,
  SavedVideoPic,
  ChannelLogo,
  SavedVideoText,
  SavedTitle,
  SavedSmall,
  SavedText,
  ViewsAndPublishDetailsSmall,
  ViewsAndPublishDetails,
} from './styledComponents'

const SavedVideos = () => (
  <VideoContext.Consumer>
    {value => {
      const {savedVideos, darkTheme} = value

      const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
      const headerBg = darkTheme ? '#212121' : '#e2e8f0'
      const iconBg = darkTheme ? '#0f0f0f' : '#f9f9f9'
      const titleColor = darkTheme ? '#ffffff' : '#323f4b'
      const color = darkTheme ? '#64748b' : '#475569'

      const renderNoSavedVideosView = () => (
        <NoSavedContainer>
          <NoSavedImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedHead titleColor={titleColor}>
            No saved videos found
          </NoSavedHead>
          <NoSavedText color={color}>
            You can save your videos while watching them
          </NoSavedText>
        </NoSavedContainer>
      )

      const renderSavedVideosPage = () => (
        <>
          <SavedVideosHeader headerBg={headerBg}>
            <SavedIcon iconBg={iconBg}>
              <HiFire size="30" color="#ff0000" />
            </SavedIcon>
            <SavedHead titleColor={titleColor}>Saved Videos</SavedHead>
          </SavedVideosHeader>
          <SavedVideosUnorderedList>
            {savedVideos.map(eachVideo => (
              <SavedLink to={`/videos/${eachVideo.id}`}>
                <SavedVideoItem key={eachVideo.id}>
                  <SavedContent>
                    <SavedVideoPic
                      src={eachVideo.thumbnailUrl}
                      alt="video thumbnail"
                    />
                  </SavedContent>

                  <SavedVideoText>
                    <ChannelLogo
                      src={eachVideo.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <SavedSmall>
                      <SavedTitle titleColor={titleColor}>
                        {eachVideo.title}
                      </SavedTitle>
                      <ViewsAndPublishDetailsSmall>
                        <SavedText color={color}>
                          {eachVideo.channel.name}
                        </SavedText>
                        <BsDot size="15" color="#909090" />
                        <ViewsAndPublishDetails>
                          <SavedText color={color}>
                            {eachVideo.viewCount} views
                          </SavedText>
                          <BsDot size="15" color="#909090" />
                          <SavedText color={color}>
                            {eachVideo.publishedAt}
                          </SavedText>
                        </ViewsAndPublishDetails>
                      </ViewsAndPublishDetailsSmall>
                    </SavedSmall>
                  </SavedVideoText>
                </SavedVideoItem>
              </SavedLink>
            ))}
          </SavedVideosUnorderedList>
        </>
      )
      const showSavedVideosList = savedVideos.length === 0
      return (
        <SavedVideosMainContainer data-testid="savedVideos" bgColor={bgColor}>
          <Header />
          <SidebarAndSavedVideosPage>
            <Sidebar />
            <SavedVideosMain>
              {showSavedVideosList
                ? renderNoSavedVideosView()
                : renderSavedVideosPage()}
            </SavedVideosMain>
          </SidebarAndSavedVideosPage>
        </SavedVideosMainContainer>
      )
    }}
  </VideoContext.Consumer>
)
export default SavedVideos
