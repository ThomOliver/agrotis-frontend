import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Typography
} from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CustomTableRow from './DataTableRow';
import PaginationActions from './PaginationActions';

interface Props {
  filteredList: any[];
  paginatedList: any[];
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
  handleAbrirObservacoes: (obs: string) => void;
  handleAbrirPropriedades: (props: any[]) => void;
  anchorEl: HTMLElement | null;
  menuIndex: number | null;
  handleOpenMenu: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
  handleCloseMenu: () => void;
}

export default function CustomTable({
  filteredList,
  paginatedList,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  handleEdit,
  handleDelete,
  handleAbrirObservacoes,
  handleAbrirPropriedades,
  anchorEl,
  menuIndex,
  handleOpenMenu,
  handleCloseMenu
}: Props) {
  if (filteredList.length === 0) {
    return (
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
        <ReportProblemIcon sx={{ color: '#ff4400', padding: '4px', marginBottom: '2px' }} />
        <Typography variant="body2" color="text.secondary">
          Nenhum cadastro encontrado.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Data Inicial</TableCell>
              <TableCell>Data Final</TableCell>
              <TableCell>Propriedade(s)</TableCell>
              <TableCell>Laboratório</TableCell>
              <TableCell align="center">Obs.</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedList.map((item, index) => (
              <CustomTableRow
                key={index}
                item={item} 
                index={index}
                handleAbrirPropriedades={handleAbrirPropriedades}
                handleAbrirObservacoes={handleAbrirObservacoes}
                handleOpenMenu={handleOpenMenu}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                anchorEl={anchorEl}
                menuIndex={menuIndex ?? -1}
                handleCloseMenu={handleCloseMenu}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredList.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 20, 50]}
        labelRowsPerPage="Registros por página"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} de ${count}`
        }
        sx={{
          display: 'flex',
          justifyContent: 'center',
          borderTop: '1px solid #ccc',
        }}
        ActionsComponent={PaginationActions}
      />
    </Paper>
  );
}
