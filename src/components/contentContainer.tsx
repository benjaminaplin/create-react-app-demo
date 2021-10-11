import React, { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import { PaintingList } from '../components/paintingList'
import service from '../service'
type AppContentProps = {}
export type Painting = {
  id: string,
  name: string,
  description: string,
  price: number
}
export const AppContent = ({}: AppContentProps) => {
  const [paintings, setPaintings ] = useState<Painting[]>([])
  
  useEffect(() => {
    service.getPaintings().then(({data}: AxiosResponse<{paintings: Painting[]}>) => {
      console.log("🚀 ~ file: contentContainer.tsx ~ line 18 ~ service.getPaintings ~ data", data)
      setPaintings(data.paintings)
    }).catch(err => console.error('whoops', err))
  }, [])

  return (
    <div className='AppContent_container' >
      <PaintingList paintings={paintings}/>
    </div>
  )
}