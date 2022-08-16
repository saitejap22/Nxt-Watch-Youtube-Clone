import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoContext from './context/VideoContext'
import './App.css'

class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
    activeTab: 'Home',
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  onClickSaveButton = video => {
    const {savedVideos} = this.state
    const videoSaved = savedVideos.find(eachVideo => eachVideo.id === video.id)

    if (videoSaved !== undefined) {
      this.setState(previousState => ({
        savedVideos: previousState.savedVideos.filter(
          savedVideo => savedVideo.id !== video.id,
        ),
      }))
    } else {
      const newVideosList = [...savedVideos, video]
      this.setState({savedVideos: newVideosList})
    }
  }

  render() {
    const {darkTheme, savedVideos, activeTab} = this.state

    return (
      <VideoContext.Provider
        value={{
          darkTheme,
          toggleTheme: this.toggleTheme,
          savedVideos,
          onClickSaveButton: this.onClickSaveButton,
          activeTab,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </VideoContext.Provider>
    )
  }
}
export default App
