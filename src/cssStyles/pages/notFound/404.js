import { createStyles, makeStyles } from '@mui/styles'

const notFoundPageStyles = makeStyles(theme =>
  createStyles({
    notFoundWrapper: {
      padding: '50px 0px',
      height: '100vh',
      color: 'red'
    },
  })
)
export default notFoundPageStyles
