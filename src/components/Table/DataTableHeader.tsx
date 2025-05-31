import { Box, Typography, Button, InputBase, IconButton, Paper, Tooltip } from '@mui/material'
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material'
import { lighten } from '@mui/material/styles'

interface Props {
  title?: string
  count: number
  onAdd: () => void
  onSearch: (term: string) => void
  searchTerm: string
  setSearchTerm: (val: string) => void
  searchFocused: boolean
  setSearchFocused: (val: boolean) => void
  primaryColor?: string
}

export default function DataTableHeader({
  count,
  onAdd,
  onSearch,
  searchTerm,
  setSearchTerm,
  searchFocused,
  setSearchFocused,
  primaryColor = '#00796b',
}: Props) {
  return (
    <Box
      height={52}
      border={1}
      bgcolor="#fff"
      borderColor="#ccc"
      p={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      {!searchFocused && (
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" fontWeight={500}>
            Registros ({count})
          </Typography>

          <Box mx={2} borderRight="1px solid #ccc" />

          <Button
            onClick={onAdd}
            disableRipple
            sx={{
              backgroundColor: 'transparent',
              padding: 0,
              minWidth: 'auto',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Typography
              fontWeight={500}
              textTransform="uppercase"
              fontSize={14}
              color={primaryColor}
              display="inline-flex"
              alignItems="center"
              gap={0.5}
              sx={{
                '&:hover': {
                  color: lighten(primaryColor, 0.4),
                },
              }}
            >
              <AddIcon fontSize="small" />
              Adicionar
            </Typography>
          </Button>
        </Box>
      )}

      <Box flex={1} ml={searchFocused ? 0 : 2}>
        <Paper
          component="form"
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '2px 8px',
            borderRadius: 1,
            transition: 'all 0.3s ease',
            width: searchFocused ? '100%' : 'auto',
            justifyContent: 'flex-end',
          }}
        >
          {searchFocused && (
            <InputBase
              placeholder="Pesquisa por Código ou Nome..."
              autoFocus
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                onSearch(e.target.value)
              }}
              sx={{ flex: 1 }}
            />
          )}
          <Tooltip title={searchFocused ? 'Fechar' : 'Pesquisar'}>
            <IconButton
              size="small"
              onClick={() => {
                if (searchFocused) {
                  setSearchTerm('')
                  onSearch('')
                  setSearchFocused(false)
                } else {
                  setSearchFocused(true)
                }
              }}
            >
              {searchFocused ? 'X' : <SearchIcon />}
            </IconButton>
          </Tooltip>
        </Paper>
      </Box>
    </Box>
  )
}
