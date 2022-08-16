import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingLink = styled(Link)`
  width: 45%;
  text-decoration: none;
  margin: 5px 5px 10px;
  padding-left: 20px;
  @media screen and (min-width: 576px) {
    width: 28%;
    padding-left: 40px;
  }
`
export const GamingItem = styled.li`
  list-style-type: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
`
export const GamingThumbnail = styled.img`
  width:100%
  border-radius: 12px;

`
export const GamingTitle = styled.p`
  font-family: roboto;
  color: ${props => props.color};
  font-size: 14px;
  margin-top: 5px;
`
export const GamingText = styled.p`
  font-family: roboto;
  color: #909090;
  font-size: 12px;
  margin-top: 0px;
`
