import SnackbarSucess from './Snackbar'
import { useSnackbarContext } from '../../context/SnackbarContext'

const SnackbarGlobal = () => {
  const { snackbarMessage, handleSnackbarClose } = useSnackbarContext()

  return (
    <SnackbarSucess
      open={snackbarMessage.open}
      onClose={handleSnackbarClose}
      message={snackbarMessage.message}
    />
  )
}

export default SnackbarGlobal
