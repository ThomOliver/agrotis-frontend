import {
  Button,
  Box
} from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useFormContext } from '../context/FormContext'
import { useNavigate } from 'react-router-dom'
import PageHeader, { TitleBold, TitleLight } from '../components/header/PageHeader'
import { MultiSelectPropriedades } from '../components/form/MultiSelectPropriedades'

import { InputNome } from '../components/form/InputNome'
import { DateRangePicker } from '../components/form/DateRangePicker'
import { SelectLaboratorio } from '../components/form/SelectLaboratorio'
import { Observacoes } from '../components/form/Observacoes'
import { useFetchFormOptions } from '../hooks/useFetchFormOptions'
import { Row, StyledContainer } from '../components/form/styles/FormStyles'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '../schemas/formSchema'
import type { FormData } from '../schemas/formSchema'
import SnackbarSucess from '../components/alert/Snackbar'
import { useListPage } from '../hooks/useListPage'
import { useSnackbarContext } from '../context/SnackbarContext'

function FormPage() {

  const { addData, updateData, editingItem, setEditingItem } = useFormContext()
  const navigate = useNavigate()
  const { setSnackbarMessage } = useSnackbarContext()

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const {
    snackbarMessage,
    handleSnackbarClose
  } = useListPage()

  useEffect(() => {
    if (editingItem) {
      reset(editingItem)
    }
  }, [editingItem, reset])

  const { propriedades, laboratorios } = useFetchFormOptions()

  const onSubmit = (data: FormData) => {
    const isEditing = editingItem !== null

    const payload: FormData = {
      nome: data.nome,
      dataInicial: new Date(data.dataInicial).toISOString(),
      dataFinal: new Date(data.dataFinal).toISOString(),
      propriedades: data.propriedades,
      laboratorio: data.laboratorio,
      observacoes: data.observacoes ?? '',
    }

    if (isEditing) {
      updateData({ ...payload, id: editingItem.id } as any)
      setEditingItem(null)
    } else {
      const id = crypto.randomUUID()
      addData({ ...payload, id } as any)
    }
    setSnackbarMessage({ open: true, message: 'Alterações salvas com sucesso' })
    reset()
    navigate('/listagem')
  }


  return (
    <StyledContainer maxWidth="lg">
      <PageHeader
          title={
            <>
              <TitleLight>Teste Front-End</TitleLight>
              <TitleBold> / Novo Cadastro</TitleBold>
            </>
          }
        onBack={() => navigate(-1)}
        action={
          <Button
            variant="contained"
            type="submit"
            form="form-id"
            sx={{
              boxShadow: 0,
              backgroundColor: 'primary',
              '&:hover': {
                backgroundColor: 'secondary',
                boxShadow: 0,
              },
            }}
          >
            Salvar
          </Button>
        }
      />

      <Box
        sx={{
          border: '1px solid #ccc',
          padding: '2rem',
          boxShadow: 1,
          backgroundColor:"#fff"
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} id="form-id">
          <Row>
            <InputNome control={control} />
            <DateRangePicker control={control} />
          </Row>

          <Row mt={2}>
            <MultiSelectPropriedades
              name="propriedades"
              control={control}
              propriedades={propriedades}
            />
            <SelectLaboratorio control={control} laboratorios={laboratorios} />
          </Row>

          <Box mt={2}>
            <Observacoes control={control} />
          </Box>
        </form>
      </Box>
      <SnackbarSucess
        open={snackbarMessage.open}
        onClose={handleSnackbarClose}
        message={snackbarMessage.message}
      />
    </StyledContainer>
  )
}

export default FormPage
