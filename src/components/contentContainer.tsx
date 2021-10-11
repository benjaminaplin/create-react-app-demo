import React, { useEffect, useState } from 'react'
import service from '../service'
type AppContentProps = {}

export const AppContent = ({}: AppContentProps) => {
  const [message, setMessage ] = useState('no message')
  
  useEffect(() => {
    service.getAbout().then((res: any) => {
      console.log("🚀 ~ file: contentContainer.tsx ~ line 9 ~ fetch ~ res", res)
      setMessage(res.data)
    }).catch(err => console.error('whoops', err))
  }, [])

  return (
    <div className='AppContent_container' >
      {message}
    </div>
  )
}