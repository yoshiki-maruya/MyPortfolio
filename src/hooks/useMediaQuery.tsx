'use client'
import { useEffect, useState } from 'react'

type UseMediaQueryType = (width: number) => boolean

const useMediaQuery: UseMediaQueryType = (width) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = () => {
    setTargetReached(window.innerWidth > width)
  }

  useEffect(() => {
    updateTarget()
    window.addEventListener('resize', updateTarget)
    return () => window.removeEventListener('resize', updateTarget)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return targetReached
}

export default useMediaQuery
