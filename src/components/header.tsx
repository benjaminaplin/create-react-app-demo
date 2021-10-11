import React from 'react'
import { Typography } from 'antd';
const { Title } = Typography

type HeaderProps = {text: string}

export const Header = ({text}: HeaderProps) => {
  return (
    <Title>
      {text}
    </Title>
  )
}