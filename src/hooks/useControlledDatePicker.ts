import dayjs, { Dayjs } from 'dayjs'

type FieldProps = {
  field: {
    value: string
    onChange: (value: string) => void
  }
  fieldState: {
    error?: {
      message?: string
    }
  }
}


export function useControlledDatePicker() {
  return ({ field, fieldState }: FieldProps) => {
    const stringValue = typeof field.value === 'string' ? field.value : ''

    return {
      value: stringValue ? dayjs(stringValue) : null,
      onChange: (date: Dayjs | null) => {
        field.onChange(date ? date.toISOString() : '')
      },
      format: 'DD/MM/YYYY',
      slotProps: {
        textField: {
          variant: 'standard' as const,
          fullWidth: true,
          error: !!fieldState.error,
          helperText: fieldState.error?.message || '',
        },
      },
    }
  }
}

