import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Box,
    Paper,
    IconButton,
    // Button,
  } from "@mui/material";
  import { EditRounded } from "@mui/icons-material";
  import EnhancedTableHead from "../global/EnhancedTableHead";
const RoundsTable = (props) => {
    // const dispatch = useDispatch();
    // const { records, handleEditAction } = props;
    // const [order, setOrder] = useState("asc");
    // const [orderBy, setOrderBy] = useState("id");
    // const [page, setPage] = useState(0);
    // const [rowsPerPage, setRowsPerPage] = useState(10);
    // const [selectedItem, setSelectedItem] = useState({});
    // const [showConfirm, setShowConfirm] = useState(false);
    // const [actionFor, setActionFor] = useState("");
    // const [confirmDetails, setConfirmDetails] = useState(false);
    // const handleCloseConfirm = () => {
    //   setShowConfirm(false);
    //   setSelectedItem({});
    // };
  
    // const handleOkConfirm = () => {
    //   if (selectedItem.id && selectedItem.id !== "") {
    //     setShowConfirm(false);
    //     const payload = {
    //       roundId: selectedItem.id,
    //     };
    //     dispatch(roundActiveInactiveDelete(payload, actionFor));
    //   }
    // };
    // const handleRequestSort = (event, property) => {
    //   const isAsc = orderBy === property && order === "asc";
    //   setOrder(isAsc ? "desc" : "asc");
    //   setOrderBy(property);
    // };
  
    // const onActionClick = (event, rowData, actionForLoc) => {
    //   setSelectedItem(rowData);
    //   setActionFor(actionForLoc);
    //   if (withConfirmAction.includes(actionForLoc)) {
    //     setShowConfirm(true);
    //     const confirmDetailsLoc = {
    //       text: "Are you sure you want to " + actionForLoc + " the round ?",
    //     };
    //     setConfirmDetails(confirmDetailsLoc);
    //   } else {
    //     handleEditAction(rowData);
    //   }
    // };
  
    // const handleChangePage = (event, newPage) => {
    //   setPage(newPage);
    // };
  
    // const handleChangeRowsPerPage = (event) => {
    //   setRowsPerPage(parseInt(event.target.value, 10));
    //   setPage(0);
    // };
  
    return (
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table size="medium">
              <EnhancedTableHead
                headCells={headCells}
                // order={order}
                // orderBy={orderBy}
                // onRequestSort={handleRequestSort}
              />
  
              <TableBody>
                {/* {stableSort(records, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  
                  .map((row, index) => {
                    return ( */}
                      <TableRow hover 
                    //   tabIndex={-1} key={row.slug + "_" + index}
                      >
                        <TableCell component="th" scope="row" size="small">
                          {/* {row.slug} */}slug
                        </TableCell>
                        <TableCell component="th" scope="row" size="small">
                          {/* {row.name} */}name
                        </TableCell>
  
                        <TableCell component="th" scope="row" size="small">
                          
                          {/* {formatDateTimeConvertAMPM(
                            new Date(row.biddingEndDate.replace(/-/g, "/"))
                          )} */}
                        </TableCell>
                        <TableCell component="th" scope="row" size="small">
                          {/* {row.playDate} */}playdate
                        </TableCell>
                        <TableCell align="center" size="small">
                          {/* {row.status === "2" ? "Completes" : "Active"} */}complte
                        </TableCell>
                        {/* <TableCell align="center" size="small">
                          {row.status === "1" ? (
                            <Button
                              variant="contained"
                              color="success"
                              onClick={(e) => onActionClick(e, row, "deactive")}
                            >
                              Yes
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              color="error"
                              onClick={(e) => onActionClick(e, row, "active")}
                            >
                              No
                            </Button>
                          )}
                        </TableCell> */}
                        <TableCell align="center" size="small">
                          {/* <IconButton
                            color="error"
                            onClick={(e) => onActionClick(e, row, "delete")}
                          >
                            <DeleteOutline />
                          </IconButton> */}
                          <IconButton
                            // color="primary"
                            // onClick={(e) => onActionClick(e, row, "edit")}
                          >
                            <EditRounded />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    {/* );
                  })} */}
  
                {/* {records.length === 0 ? ( */}
                  <TableRow>
                    <TableCell colSpan={6}>No Record Found(s)</TableCell>
                  </TableRow>
                {/* // ) : null} */}
              </TableBody>
            </Table>
          </TableContainer>
  
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            // count={records.length}
            // rowsPerPage={rowsPerPage}
            // page={page}
            // onPageChange={handleChangePage}
            // onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <ConfirmModal
          showConfirm={showConfirm}
          handleCloseConfirm={handleCloseConfirm}
          handleOKConfirm={handleOkConfirm}
          actionButton="Confirm"
          confirmDetails={confirmDetails}
        /> */}
      </Box>
    );
  };
  export default RoundsTable;
  const headCells = [
    { id: "slug", isSortable: true, label: "Name" },
    { id: "name", isSortable: true, label: "Label" },
    {
      id: "biddingEndDate",
      isSortable: true,
      label: "Selection End Date and Time",
    },
    { id: "playDate", isSortable: true, label: "Play Date" },
    { id: "active", isSortable: false, label: "Status" },
    { id: "action", isSortable: false, label: "Edit" },
  ];
  