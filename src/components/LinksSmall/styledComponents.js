import {Link} from 'react-router-dom'
import styled from 'styled-components'

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
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const LinkText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 10px;
  color: ${props => props.color};
`
export const SidebarSmall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
