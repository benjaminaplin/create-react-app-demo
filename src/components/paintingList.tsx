import React from 'react'
import { Typography } from 'antd';
const { Title } = Typography

type PaintingListProps = {text: string}

export const PaintingList = ({text}: PaintingListProps) => {
  return (
    <Title>
      {text}
    </Title>
  )
}