import { FC, useCallback, useMemo } from "react"
import { Button, TableCell } from "@mui/material"

import { dataParser } from "@widgets/table/lib"
import { TableCellProps } from "@shared/table-cell/ui/table-cell-container"
import { useAppDispatch } from "@app/hooks"
import { removeAstrologer } from "@entities/astrologers/model/slice"

export const NameTableCell: FC<TableCellProps> = ({ astrologer, id }) => {
  const dispatch = useAppDispatch()

  const cellTranslation = useMemo(
    () => dataParser[id](astrologer),
    [astrologer, id],
  )

  const removeAstrologerCallback = useCallback(
    () => dispatch(removeAstrologer(astrologer.id)),
    [astrologer.user_id],
  )

  return (
    <TableCell key={id}>
      <span>{cellTranslation}</span>
      <Button size="small" onClick={removeAstrologerCallback}>
        Delete
      </Button>
    </TableCell>
  )
}
