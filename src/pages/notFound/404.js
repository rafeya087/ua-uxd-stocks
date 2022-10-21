import { Stack, Typography, Container } from '@mui/material'
import notFoundPageStyles from '../../cssStyles/pages/notFound/404'

function NotFound() {
  const classes = notFoundPageStyles()
  return (
    <Container maxwidth='lg'>
      <Stack spacing={5} className={classes.notFoundWrapper} direction='row' justifyContent='center' alignItems='center'>
        <Typography variant='h1' align='left'>
          404
        </Typography>

        <Typography variant='h2' align='left'>
          Page Not Found
        </Typography>
      </Stack>
    </Container>
  )
}
export default NotFound
