import React from 'react'

const VideoContext = React.createContext({
  darkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  onClickSaveButton: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  addVideo: () => {},
})

export default VideoContext
