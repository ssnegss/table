import * as React from "react";
import { useState } from "react";
import { useSortableData } from "../../customHooks/useSortableData";
import { TableHeaderComponent } from "../TableHeaderComponent/TableHeaderComponent";
import './SortedTableComponent.css'

const SortedTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const [firstNameSearchValue, setFirstNameSearchValue] = useState("");
    const [lastNameSearchValue, setLastNameSearchValue] = useState("");
    const [emailSearchValue, setEmailSearchValue] = useState("");
    const [phoneSearchValue, setPhoneSearchValue] = useState("");

    return (
        <table>
            <caption>Clients</caption>
            <thead>
                <tr>
                    {props.tableColumns.map((tableColumn) => (
                        <TableHeaderComponent
                        className={getClassNamesFor(tableColumn.className)}
                        buttonDisabled={tableColumn.isSortable? false : true}
                        onClick={() => requestSort(tableColumn.className)}
                        name={tableColumn.columnName}
                        inputReadOnly={tableColumn.isSearchable? false : true}
                        // value={firstNameSearchValue}
                        // onChange={(e) => setFirstNameSearchValue(e.target.value)}
                    />
                    ))}
                </tr>
            </thead>
            <tbody>
                {items
                .filter((item) =>
                item.firstName.match(new RegExp(firstNameSearchValue, "i"))
                )
                .filter((item) =>
                item.lastName.match(new RegExp(lastNameSearchValue, "i"))
                )
                .filter((item) =>
                item.email.match(new RegExp(emailSearchValue, "i"))
                )
                .filter((item) =>
                item.phone.match(new RegExp(phoneSearchValue, "i"))
                )
                .map((item) => (
                    <tr key={item.id}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

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

    const tableColumns = [
        {
            columnName: "First name",
            className: "firstName",
            isSortable: true,
            isSearchable: true,
        },
        {
            columnName: "Last name",
            className: "lastName",
            isSortable: true,
            isSearchable: true,
        },
        {
            columnName: "Email",
            className: "email",
            isSortable: true,
            isSearchable: true,
        },
        {
            columnName: "Phone number",
            className: "phone",
            isSortable: true,
            isSearchable: true,
        },
    ]

    return (
        <div className="myTable">
            <SortedTable products={mydata} tableColumns={tableColumns}/>
        </div>
    );
};
