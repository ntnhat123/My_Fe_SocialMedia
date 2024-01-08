import React from 'react'
import Homecontainers from '@/containers/home/Homecontainers'
import { useDispatch } from 'react-redux'

const HomePage = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  },[])
  React.useEffect(() => {
    dispatch({type: 'SET_LOADING', payload: isLoading})
  },[isLoading])

  return (
    <>
      <div className="flex items-center justify-center">
        {isLoading ? (
          <div>
            <img
              src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
              alt="loading"
            />
          </div>
        ) : (
          <Homecontainers />
        )}
      </div>

    </>
  )
}

export default HomePage