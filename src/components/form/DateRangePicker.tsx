import { Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import type { FormData } from '../../schemas/formSchema';

type Props = {
  control: Control<FormData>;
};

export function DateRangePicker({ control }: Props) {
  const customStyles = {
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#00796B',
    },
    '& .MuiPickersInputBase-root.Mui-focused:after': {
      borderBottomColor: '#00796B',
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" gap={2}>
        <Controller
          name="dataInicial"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
          <DatePicker
            label="Data Inicial *"
            value={field.value ? dayjs(field.value) : null}
            onChange={(date) => field.onChange(date ? date.toISOString() : '')}
            format="DD/MM/YYYY"
            slotProps={{
              textField: () => ({
                variant: 'standard',
                fullWidth: true,
                error: !!fieldState.error,
                helperText: fieldState.error?.message || '',
                sx: customStyles,
              }),
              day: {
                sx: {
                  '&.Mui-selected': {
                    backgroundColor: '#00796B !important',
                    color: '#fff',
                  }
                },
              },
            }}
          />
          )}
        />

        <Controller
          name="dataFinal"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
          <DatePicker
            label="Data Final *"
            value={field.value ? dayjs(field.value) : null}
            onChange={(date) => field.onChange(date ? date.toISOString() : '')}
            format="DD/MM/YYYY"
            slotProps={{
              textField: () => ({
                variant: 'standard',
                fullWidth: true,
                error: !!fieldState.error,
                helperText: fieldState.error?.message || '',
                sx: customStyles,
              }),
              day: {
                sx: {
                  '&.Mui-selected': {
                    backgroundColor: '#00796B !important',
                    color: '#fff',
                  },
                },
              },
            }}
          />

          )}
        />
      </Box>
    </LocalizationProvider>
  );
}