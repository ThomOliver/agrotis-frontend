import { Box, Button, Typography, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/img/Logo.png'


export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: 350,
          padding: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" color="primary" gutterBottom>
          TESTE FRONT-END
        </Typography>

        <Box my={3}>
          <img
            src={Logo}
            alt="Logo Agrotis"
            style={{ maxWidth: '60%', height: 'auto' }}
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          color="primary"
          sx={{ '&:hover': { backgroundColor: 'secondary' } }}
          onClick={() => navigate('/form')}
        >
          VISUALIZAR
        </Button>
      </Paper>
    </Box>
  )
}
