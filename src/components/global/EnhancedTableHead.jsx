import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const EnhancedTableHead = (props) => {
  const { 
    // order, orderBy, onRequestSort,
     headCells } = props;

  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  return (
    <TableHead sx={{ borderBottom: "2px solid #7500c0;" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            className="style-table-header"
            key={headCell.id}
            align={headCell.isSortable ? "left" : "center"}
            size="small"
            // sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.isSortable ? (
              <TableSortLabel
                // active={orderBy === headCell.id}
                // direction={orderBy === headCell.id ? order : "asc"}
                // onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}

                {/* {orderBy === headCell.id ? ( */}
                  <Box component="span" sx={visuallyHidden}>
                    {/* {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"} */}
                  </Box>
                {/* ) : null} */}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
export default EnhancedTableHead;
