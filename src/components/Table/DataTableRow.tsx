import {
  TableCell,
  TableRow,
  Link,
  IconButton,
  Tooltip,
  Menu,
  MenuItem
} from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface Props {
  item: any;
  index: number;
  handleAbrirPropriedades: (props: any[]) => void;
  handleAbrirObservacoes: (obs: string) => void;
  handleOpenMenu: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
  anchorEl: HTMLElement | null;
  menuIndex: number | null;
  handleCloseMenu: () => void;
}

export default function CustomTableRow({
  item,
  index,
  handleAbrirPropriedades,
  handleAbrirObservacoes,
  handleOpenMenu,
  handleEdit,
  handleDelete,
  anchorEl,
  menuIndex,
  handleCloseMenu
}: Props) {
  return (
    <TableRow
      hover
      sx={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}
    >
      <TableCell>{item.codigo}</TableCell>
      <TableCell>{item.nome}</TableCell>
      <TableCell>{new Date(item.dataInicial).toLocaleDateString()}</TableCell>
      <TableCell>{new Date(item.dataFinal).toLocaleDateString()}</TableCell>
      <TableCell>
        {item.propriedades.length > 1 ? (
          <Link
            href="#"
            underline="hover"
            color="success.main"
            onClick={() => handleAbrirPropriedades(item.propriedades)}
          >
            ({item.propriedades.length}) propriedades
          </Link>
        ) : (
          item.propriedades[0]?.nome || '-'
        )}
      </TableCell>
      <TableCell>{item.laboratorio?.nome}</TableCell>
      <TableCell align="center">
        <Tooltip title="Observações">
          <IconButton onClick={() => handleAbrirObservacoes(item.observacoes)}>
            <ChatOutlinedIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell align="center">
        <Tooltip title="Opções">
          <IconButton size="small" onClick={(e) => handleOpenMenu(e, index)}>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        {menuIndex === index && (
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={() => handleEdit(index)}>Editar</MenuItem>
            <MenuItem onClick={() => handleDelete(index)}>Excluir</MenuItem>
          </Menu>
        )}
      </TableCell>
    </TableRow>
  );
}
