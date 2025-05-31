import {
  Box,
  Chip,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  FormHelperText,
} from '@mui/material'
import type { SelectChangeEvent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Controller } from 'react-hook-form'

import type { Propriedade } from '../../types'

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 300,
      width: 250,
    },
  },
}

interface MultiSelectPropriedadesProps {
  name: string
  control: any
  propriedades: Propriedade[]
  label?: string
}

export const MultiSelectPropriedades = ({
  name,
  control,
  propriedades,
  label = 'Propriedade(s)',
}: MultiSelectPropriedadesProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field, fieldState }) => (
        <FormControl
          fullWidth
          variant="standard"
          error={!!fieldState.error}
          sx={{
            '& .MuiInput-underline:after': {
              borderBottomColor: '#00796B',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#00796B',
            },
          }}
        >
          <InputLabel id={`${name}-label`}>{label} *</InputLabel>
          <Select
            labelId={`${name}-label`}
            multiple
            value={field.value.map((p: Propriedade) => p.id)}
            onChange={(event: SelectChangeEvent<number[]>) => {
              const selectedIds = event.target.value as number[]
              const selectedProps = propriedades
                .filter((p) => selectedIds.includes(p.id))
                .map((p) => ({ id: p.id, nome: p.nome })) 
              field.onChange(selectedProps)
            }}
            renderValue={(selectedIds) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {propriedades
                  .filter((p) => selectedIds.includes(p.id))
                  .map((p) => (
                    <Chip
                      key={p.id}
                      label={p.nome}
                      onMouseDown={(e) => e.stopPropagation()}
                      onDelete={() => {
                        const newValue = field.value.filter(
                          (item: Propriedade) => item.id !== p.id
                        )
                        field.onChange(newValue)
                      }}
                      color="primary"
                      sx={{backgroundColor:'#01a98e' }}
                      size="small"
                    />
                  ))}
              </Box>
            )}
            variant="standard"
            MenuProps={MenuProps}
            IconComponent={ExpandMoreIcon}
            endAdornment={
              field.value.length > 0 && (
                <CloseIcon
                  sx={{ fontSize: 14, mr: 4, cursor: 'pointer' }}
                  onClick={(e) => {
                    e.stopPropagation()
                    field.onChange([])
                  }}
                />
              )
            }
          >
            {propriedades.map((prop) => (
              <MenuItem key={prop.id} value={prop.id}>
                <Checkbox checked={field.value.some((p: Propriedade) => p.id === prop.id)} />
                <ListItemText primary={prop.nome} />
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