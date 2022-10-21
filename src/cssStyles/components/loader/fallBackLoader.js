import { createStyles, makeStyles } from '@mui/styles'

const fallbackLoaderStyles = makeStyles(theme => createStyles({
  fallBackLoaderWrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  loaderWrapper: {
    height: '50vh',
  },
  logoLottie: {
    width: '100%',
  },
  fallbackLogo: {
    marginBottom: '30px',
  },
  fallbackProgress: {
    color: `#FFC10B !important`,
  },
}))
export default fallbackLoaderStyles
