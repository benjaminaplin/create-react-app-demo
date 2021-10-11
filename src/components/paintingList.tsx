import React from 'react'
import { Typography } from 'antd';
const { Title } = Typography
import { Card } from 'antd';
const { Meta } = Card;
import type { Painting } from './contentContainer'

type PaintingListProps = { paintings: Painting[] }

export const PaintingList = ({paintings}: PaintingListProps) => { 
console.log("🚀 ~ file: paintingList.tsx ~ line 12 ~ PaintingList ~ paintings", paintings)
  return (
    <div>
      {paintings?.map((painting: Painting) => {
        return (
          <div key={painting.id}>
            <Title>
            {painting.name}
            </Title>
            <Card
              hoverable
              style={{ width: 240 }}
              // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title={painting.description} description={painting.price} />
            </Card>
          </div>
          )})}
    </div>
  )
}