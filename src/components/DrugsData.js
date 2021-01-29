import React from "react";
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
import api from "../services/api";
import loadingIcn from "../assets/loading-icon.svg";
import { useStyle } from "./style";

//seta as colunas que escolhi.
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

export default function DrugsData({ fetchResult, getResult }) {
  const classes = useStyle();
  const [page, setPage] = React.useState(0);
  const [totalDrugs, setTotalDrugs] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [medications, setMedications] = React.useState([]);

  //se a token for válida, busca o resultado de acordo com os parametros.
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
      })
      .catch((err) => console.log(err.toJSON()));
  }, [rowsPerPage, page, fetchResult]);

  //PROPS: encaminha o resultado para medication (res.data.total).
  React.useEffect(() => {
    getResult(totalDrugs);
  }, [totalDrugs]);

  //troca o "limit" - número de linhas por página
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
  };

  //troca a página
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (!medications.length) {
    return (
      <div className={classes.icnArea}>
        <img src={loadingIcn} className={classes.loadingIcn} />
      </div>
    );
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
                    align="center"
                    style={{ minWidth: 100 }}
                    className={classes.cellHeader}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {medications.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.gpi14}>
                    <TableCell className={classes.tableCell} align="right">
                      {row.name}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      {row.dosage}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      {row.type_description}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      {row.coverage}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      {row.strength_unit}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      {row.strength}
                    </TableCell>
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
