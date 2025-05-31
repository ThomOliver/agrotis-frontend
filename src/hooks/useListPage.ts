import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";
import { useState } from "react";

export function useListPage() {
  const { dataList, setEditingItem, setDataList } = useFormContext();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState({ open: false, message: '' });
  const [modals, setModals] = useState({ observacoes: '', openObs: false, propriedades: [], openProps: false });

  const listWithCodigo = [...dataList]
    .map((item, index) => ({
      ...item,
      codigo: dataList.length - index 
    }));

  const filteredList = listWithCodigo.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.nome.toLowerCase().includes(term) ||
      item.codigo.toString().includes(term)
    );
  });

  const paginatedList = filteredList.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleEdit = (index: number) => {
    const realItem = filteredList[page * rowsPerPage + index];
    const originalIndex = dataList.findIndex(item => item.nome === realItem.nome);
    if (originalIndex !== -1) {
      setEditingItem(dataList[originalIndex]);
      navigate('/form');
    }
  };

  const handleDelete = (index: number) => {
    const realItem = filteredList[page * rowsPerPage + index];
    const updated = dataList.filter(item => item.nome !== realItem.nome);
    setDataList(updated);
    setSnackbarMessage({ open: true, message: 'Alterações salvas com sucesso' });
  };

  const handleSnackbarClose = (reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbarMessage(prev => ({ ...prev, open: false }));
  };

  return {
    filteredList,
    paginatedList,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    searchTerm,
    setSearchTerm,
    snackbarMessage,
    setSnackbarMessage,
    modals,
    setModals,
    handleEdit,
    handleDelete,
    handleSnackbarClose
  };
}
