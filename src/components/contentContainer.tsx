import React, { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import { PaintingList } from '../components/paintingList'
import service from '../service'
type AppContentProps = {}

export const AppContent = ({}: AppContentProps) => {
  const [paintings, setPaintings ] = useState<string[]>([])
  
  useEffect(() => {
    service.getPaintings().then(({data}: AxiosResponse<{paintings: string[]}>) => {
      setPaintings(data.paintings)
    }).catch(err => console.error('whoops', err))
  }, [])

  return (
    <div className='AppContent_container' >
      <PaintingList paintings={paintings}/>
    </div>
  )
}