import * as React from "react";
import { useState } from "react";
import { tableColumns } from "./TableColumns";
import { SortedTableComponent as SortedTable } from '../SortedTableComponent/SortedTable'

export const ProductTable = () => {
    const [mydata, setmyData] = useState([]);

    async function GetTableData() {
        const response = await fetch(
            ` http://www.filltext.com/?rows=20&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
        );
        const data = await response.json();
        // console.log(data);
        setmyData(data);
    }

    React.useEffect(async () => {
        GetTableData();
    }, []);

    return (
        <div className="myTable">
            <SortedTable products={mydata} tableColumns={tableColumns} />
        </div>
    );
};