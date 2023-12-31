import { FC, useMemo } from "react"
import { TableCell } from "@mui/material"

import { dataParser } from "@widgets/table/lib"
import { TableCellProps } from "@shared/table-cell/ui/table-cell-container"

export const ImageTableCell: FC<TableCellProps> = ({ astrologer, id }) => {
  const imgLink = useMemo(() => dataParser[id](astrologer), [astrologer, id])

  return (
    <TableCell key={id}>
      {imgLink && (
        <img
          width={40}
          height={40}
          src={String(imgLink)}
          alt={astrologer.name}
        />
      )}
    </TableCell>
  )
}
