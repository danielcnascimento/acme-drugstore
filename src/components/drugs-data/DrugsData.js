import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import api from "../../services/api";

const columns = [
  { id: "name", label: "Nome", minWidth: 170 },
  { id: "dosage", label: "Dosagem", minWidth: 100 },
  {
    id: "type_description",
    label: "Farmaceutico",
    minWidth: 170,
    align: "right",
  },
  {
    id: "covarage",
    label: "Tipo",
    minWidth: 170,
    align: "right",
  },
  {
    id: "strengh_unit",
    label: "Unidade/tipo",
    minWidth: 170,
    align: "right",
  },
  {
    id: "strengh",
    label: "Unidade/Qtd.",
    minWidth: 170,
    align: "right",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
  },
  container: {
    maxHeight: 600,
  },
});

export default function DrugsData({ fetchResult }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [totalDrugs, setTotalDrugs] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [medications, setMedications] = React.useState([]);

  // rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  React.useEffect(() => {
    api
      .get(`drugs?name=${fetchResult}&limit=${rowsPerPage}&page=${page + 1}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("acesso")}`,
        },
      })
      .then((res) => {
        setMedications(res.data.data);
        setTotalDrugs(res.data.total);
        setTotalPages(res.data.last_page);
      })
      .catch((err) => console.log(err.toJSON()));
  }, [rowsPerPage, page, fetchResult]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  console.log(totalDrugs);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    //setPage(1);
  };
  if (!medications.length) {
    return <view />;
  } else {
    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="right"
                    style={{ minWidth: 170 }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {medications //rows

                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.gpi14}
                    >
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.dosage}</TableCell>
                      <TableCell align="right">
                        {row.type_description}
                      </TableCell>
                      <TableCell align="right">{row.coverage}</TableCell>
                      <TableCell align="right">{row.strength_unit}</TableCell>
                      <TableCell align="right">{row.strength}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={totalDrugs}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}
