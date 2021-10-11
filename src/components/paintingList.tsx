import React from 'react'
import { Typography } from 'antd';
const { Title } = Typography
import { Card } from 'antd';

const { Meta } = Card;


type PaintingListProps = {paintings: string[]}

export const PaintingList = ({paintings}: PaintingListProps) => {
console.log("🚀 ~ file: paintingList.tsx ~ line 12 ~ PaintingList ~ paintings", paintings)
  return (
    <div>
      {paintings.map((painting: string) => {
        
        return (
          <div key={painting}>
            <Title>
            {painting}
            </Title>
            <Card
              hoverable
              style={{ width: 240 }}
              // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title={painting} description={painting} />
            </Card>
          </div>
          )})}
    </div>
  )
}