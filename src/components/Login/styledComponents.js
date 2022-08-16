import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginForm = styled.form`
  max-width: 400px;
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.loginBg};
  box-shadow: 0 0 30px rgba(120, 120, 120, 0.1);
  border-radius: 10px;
  @media (min-width: 768px) {
    box-shadow: 0 0 0 20px rgba(200, 200, 200, 0.1);
  }
`
export const LoginLogo = styled.img`
  width: 120px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 150px;
  }
`
export const LoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: transparent;
`
export const LoginLabel = styled.label`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: bold;
  margin: 0;
  color: ${props => props.color};
`
export const LoginInput = styled.input`
  width: 100%;
  font-size: 15px;
  height: 40px;
  font-family: 'Roboto';
  padding-left: 10px;
  border-radius: 6px;
  border: 1px solid #94a3b8;
  color: ${props => props.color};
  background-color: transparent;
`
export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input`
  zoom: 1.5;
  margin-right: 6px;
`
export const CheckBoxLabel = styled(LoginLabel)`
  color: ${props => props.color};
  margin: 0;
  font-family: 'Roboto';
`
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  color: #ffffff;
  background-color: #2082f2;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 10px;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
  align-self: flex-start;
`
