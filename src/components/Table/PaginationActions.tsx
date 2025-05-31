import React from 'react'
import { IconButton } from '@mui/material'
import {
  FirstPage,
  LastPage,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@mui/icons-material'

interface PaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void
}

function PaginationActions({
  count,
  page,
  rowsPerPage,
  onPageChange
}: PaginationActionsProps) {
  const lastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1)

  const handleFirstPage = () => onPageChange(null, 0)
  const handlePrevPage = () => onPageChange(null, page - 1)
  const handleNextPage = () => onPageChange(null, page + 1)
  const handleLastPage = () => onPageChange(null, lastPage)

  return (
    <div style={{ flexShrink: 0, marginLeft: '2.5em' }}>
      <IconButton onClick={handleFirstPage} disabled={page === 0}>
        <FirstPage />
      </IconButton>
      <IconButton onClick={handlePrevPage} disabled={page === 0}>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton onClick={handleNextPage} disabled={page >= lastPage}>
        <KeyboardArrowRight />
      </IconButton>
      <IconButton onClick={handleLastPage} disabled={page >= lastPage}>
        <LastPage />
      </IconButton>
    </div>
  )
}

export default PaginationActions
