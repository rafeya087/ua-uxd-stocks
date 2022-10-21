import { Stack } from '@mui/material'
import { useLocation } from 'react-router-dom'
import fallbackLoaderStyles from '../../cssStyles/components/loader/fallBackLoader'

const FallbackLoader = () => {
  const classes = fallbackLoaderStyles()
  const location = useLocation()

  return (
    <Stack className={classes.fallBackLoaderWrapper} justifyContent='center' alignItems='center'>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <i class='fa-solid fa-spinner fa-spin' style={{ fontSize: 30 }}></i>
        {/* {['/app-faqs', '/app-privacy-policy', '/app-terms-of-service'].includes(location.pathname) ? (
          <i className='fa fa-spinner' style={{ display: 'none' }}></i>
        ) : (
          <i className='fa fa-spinner' style={{ width: 60, height: 60 }} ></i>
        )} */}
      </Stack>
    </Stack>
  )
}

export default FallbackLoader
