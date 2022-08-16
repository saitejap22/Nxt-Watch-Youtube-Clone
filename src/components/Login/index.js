import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import VideoContext from '../../context/VideoContext'
import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  LoginInputContainer,
  LoginLabel,
  LoginInput,
  CheckBoxContainer,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    const {username, password, showPassword, showError, errorMsg} = this.state

    return (
      <VideoContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#212121' : '#f9f9f9'
          const textColor = darkTheme ? '#ffffff' : '#323f4b'
          const loginBg = darkTheme ? '#000000' : '#ffffff'

          return (
            <LoginContainer bgColor={bgColor}>
              <LoginForm loginBg={loginBg} onSubmit={this.onFormSubmit}>
                <LoginLogo
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginInputContainer>
                  <LoginLabel color={textColor} htmlFor="username">
                    USERNAME
                  </LoginLabel>
                  <LoginInput
                    type="text"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                    color={textColor}
                    placeholder="Username"
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <LoginLabel color={textColor} htmlFor="password">
                    PASSWORD
                  </LoginLabel>
                  <LoginInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                    color={textColor}
                    placeholder="Password"
                  />
                </LoginInputContainer>
                <CheckBoxContainer>
                  <CheckBox
                    id="showPassword"
                    type="checkbox"
                    onChange={this.onChangeShowPassword}
                  />
                  <CheckBoxLabel htmlFor="showPassword" color={textColor}>
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Login
