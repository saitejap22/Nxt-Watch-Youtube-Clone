import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SidebarLarge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 90vh;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const LinksContainer = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const LinkText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 15px;
  color: ${props => props.color};
`

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color};
`
export const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
`
export const SmImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
