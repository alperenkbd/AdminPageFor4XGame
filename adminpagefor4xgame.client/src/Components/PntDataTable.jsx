//if more datatable and more configuration need on datatable will be necessary on project, might add materialUi

import React from 'react';
import DataGrid from 'react-data-grid';
import 'react-data-grid/lib/styles.css';
import styled from 'styled-components';



//const exampleColumns = [
//    { key: 'id', name: 'ID' },
//    { key: 'name', name: 'Name' },
//    { key: 'age', name: 'Age' },
//];

//const exampleRows = [
//    { id: 1, name: 'cemil', age: 28 },
//    { id: 2, name: 'suat', age: 34 },
//    { id: 3, name: 'orhan', age: 45 }
//    { id: 4, name: 'yusuf', age: 51 }
//];

const MyDataGrid = (props) => {

    const { columns, rows, header,customComponent } = props;

    return (
        <>
            <Header>{header}</Header>
            <>{customComponent}</>
            <DataGrid  columns={columns} rows={rows}  />
        </>
    );
};


const Header = styled.h1`
  color:#FFE6C7;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export default MyDataGrid;
