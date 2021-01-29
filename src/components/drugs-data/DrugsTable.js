import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import api from "../../services/api";

const columns = [
  { field: "col1", headerName: "Nome", width: 170 },
  { field: "col2", headerName: "Dosagem", width: 170 },
  {
    field: "col3",
    headerName: "Farmaceutico",
    minWidth: 170,
    align: "right",
  },
  {
    field: "col4",
    headerName: "Tipo",
    width: 170,
    align: "right",
  },
  {
    field: "col5",
    headerName: "Unidade/tipo",
    width: 170,
    align: "right",
  },
  {
    field: "col6",
    headerName: "Unidade/Qtd.",
    width: 170,
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
  const ref = useRef();
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [totalDrugs, setTotalDrugs] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [medications, setMedications] = React.useState([]);
  const [row, setRow] = React.useState([]);

  React.useEffect(() => {
    api
      .get(`drugs?name=${fetchResult}&limit=${rowsPerPage}&page=${page}`, {
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

  React.useEffect(() => {
    let row = medications.map((i, index) => {
      return {
        id: index,
        col1: i.name,
        col2: i.dosage,
        col3: i.type_description,
        col4: i.coverage,
        col5: i.strength_unit,
        col6: i.strength,
      };
    });

    setRow(row);
  }, [medications, page]);

  console.log(row);

  const handleChangePage = (newPage) => {
    setPage(newPage.page);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.pageSize);
    //setPage(1);
  };

  return (
    <DataGrid
      ref={ref}
      columns={columns}
      rows={row}
      rowsPerPageOptions={[5, 10, 20]}
      rowCount={totalDrugs}
      //rowsPerPage={rowsPerPage}
      page={page}
      pageSize={rowsPerPage}
      onPageChange={handleChangePage}
      onPageSizeChange={handleChangeRowsPerPage}
    />
  );
}
