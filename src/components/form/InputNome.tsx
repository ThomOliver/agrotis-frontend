import { TextField } from '@mui/material' 
import { Controller } from 'react-hook-form'
import type { Control } from 'react-hook-form'
import type { FormData } from '../../schemas/formSchema' 

type Props = {
  control: Control<FormData>
}

export function InputNome({ control }: Props) {
  return (
    <Controller
      name="nome"
      control={control}
      defaultValue=""
      rules={{ required: 'Nome é obrigatório' }}
      render={({ field, fieldState }) => (
        <TextField
          fullWidth
          label="Nome *"
          variant="standard"
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ''}
          sx={{
            '& label.Mui-focused': {
              color: '#00796B',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#00796B',
            },
            '& .MuiInputBase-input:focus': {
              color: '#00796B',
            },
          }}
        />
      )}
    />
  )
}
