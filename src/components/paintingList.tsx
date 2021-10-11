import React from 'react'
import { Typography } from 'antd';
const { Title } = Typography
import { Card } from 'antd';

const { Meta } = Card;


type PaintingListProps = {paintings: string[]}

export const PaintingList = ({paintings}: PaintingListProps) => {
  return (
    <>
      <Title>
      Paintings
      </Title>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>,
      </>
  )
}