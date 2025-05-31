import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import type { Control } from 'react-hook-form'
import type { Laboratorio } from '../../types'
import type { FormData } from '../../schemas/formSchema'

type Props = {
  control: Control<FormData>
  laboratorios: Laboratorio[]
}

export function SelectLaboratorio({ control, laboratorios }: Props) {
  return (
    <Controller
      name="laboratorio"
      control={control}
      defaultValue={undefined}
      render={({ field, fieldState }) => (
        <FormControl fullWidth variant="standard" error={!!fieldState.error}
          sx={{
            '& .MuiInput-underline:after': {
              borderBottomColor: '#00796B',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#00796B',
            },
          }}>
          <InputLabel id="laboratorio-label">Laboratório *</InputLabel>
          <Select
            labelId="laboratorio-label"
            value={field.value?.id || ''}
            onChange={(event) => {
              const selectedId = event.target.value
              const selectedLab = laboratorios.find((lab) => lab.id === selectedId) || null
              field.onChange(selectedLab)
            }}
          >
            {laboratorios.map((lab) => (
              <MenuItem key={lab.id} value={lab.id}>
                {lab.nome}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && (
            <FormHelperText>{fieldState.error.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  )
}
