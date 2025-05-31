import React, { useState } from 'react'
import {
  Typography,
  Paper,
  Box,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/header/PageHeader'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SnackbarSucess from '../components/alert/Snackbar';
import CustomModal from '../components/CustomModal';
import DataTableHeader from '../components/Table/DataTableHeader';
import { useListPage } from '../hooks/useListPage'
import CustomTable from '../components/Table/DataTable';
import { useModalObservacoesPropriedades } from '../hooks/useModalObservacoesPropriedades'
import { useMenuControl } from '../hooks/useMenuControl'
import { StyledContainer } from '../components/form/styles/FormStyles'

function ListPage() {

  const {
    filteredList,
    paginatedList,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    searchTerm,
    setSearchTerm,
    snackbarMessage,
    handleEdit,
    handleDelete,
    handleSnackbarClose
  } = useListPage()

  const {
    openObservacoes,
    observacoes,
    setOpenObservacoes,
    handleAbrirObservacoes,
    openPropriedades,
    propriedades,
    setOpenPropriedades,
    handleAbrirPropriedades
  } = useModalObservacoesPropriedades()

  const {
    anchorEl,
    menuIndex,
    handleOpenMenu,
    handleCloseMenu
  } = useMenuControl()


  const navigate = useNavigate()
  const [searchFocused, setSearchFocused] = useState(false)


  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <StyledContainer maxWidth="lg">
      <PageHeader title="Teste Front-End" onBack={() => navigate(-1)}/>
      <DataTableHeader
        count={filteredList.length}
        onAdd={() => navigate('/form')}
        onSearch={(term) => {
          setSearchTerm(term)
          setPage(0)
        }}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchFocused={searchFocused}
        setSearchFocused={setSearchFocused}
        primaryColor="#00796b"
      />
      {filteredList.length === 0 ? (
      <Paper
        sx={{
          padding: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 1,
        }}
      >
        <ReportProblemIcon sx={{ color: '#ff4400', padding:"4px", marginBottom:"2px"}} />
        <Typography variant="body2" color="text.secondary">
          Nenhum cadastro encontrado.
        </Typography>
      </Paper>

      ) : (
        <CustomTable
          filteredList={filteredList}
          paginatedList={paginatedList}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleAbrirObservacoes={handleAbrirObservacoes}
          handleAbrirPropriedades={handleAbrirPropriedades}
          anchorEl={anchorEl}
          menuIndex={menuIndex}
          handleOpenMenu={handleOpenMenu}
          handleCloseMenu={handleCloseMenu}
        />

      )}
      <SnackbarSucess
        open={snackbarMessage.open}
        onClose={handleSnackbarClose}
        message={snackbarMessage.message}
      />

      <CustomModal
        open={openObservacoes}
        onClose={() => setOpenObservacoes(false)}
        title="Observações"
      >
        <Typography>{observacoes || 'Sem observações.'}</Typography>
      </CustomModal>

      <CustomModal
        open={openPropriedades}
        onClose={() => setOpenPropriedades(false)}
        title={`Propriedades (${propriedades.length})`}
      >
        {propriedades.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: 2,
              bgcolor: index % 2 === 0 ? '#fff' : '#f5f5f5',
              borderBottom: '1px solid #ccc'
            }}
          >
            <Typography>{item.nome}</Typography>
          </Box>
        ))}
      </CustomModal>
    </StyledContainer>
  )
}

export default ListPage