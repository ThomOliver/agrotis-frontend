import { Box, TextField, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import type { Control }  from 'react-hook-form'
import type { FormData } from '../../schemas/formSchema' 

type Props = {
  control: Control<FormData>
}

export function Observacoes({ control }: Props) {
  return (
    <Controller
      name="observacoes"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <>
          <TextField
            fullWidth
            label="Observações"
            variant="standard"
            multiline
            {...field}
            sx={{
            '& .MuiInput-underline:after': {
              borderBottomColor: '#00796B',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#00796B',
            },
          }}
          />
          <Box display="flex" justifyContent="flex-end">
            <Typography variant="caption" color="textSecondary">
              {field.value?.length}/100
            </Typography>
          </Box>
        </>
      )}
    />
  )
}
