import React, { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import { PaintingList } from '../components/paintingList'
import service from '../service'
type AppContentProps = {}

export const AppContent = ({}: AppContentProps) => {
  const [message, setMessage ] = useState('no message')
  
  useEffect(() => {
    service.getAbout().then((res: AxiosResponse<{title: string}>) => {
      console.log("🚀 ~ file: contentContainer.tsx ~ line 9 ~ fetch ~ res.data.title", res.data.title)
      setMessage(res.data.title)
    }).catch(err => console.error('whoops', err))
  }, [])

  return (
    <div className='AppContent_container' >
      < PaintingList paintings={['']}/>
    </div>
  )
}