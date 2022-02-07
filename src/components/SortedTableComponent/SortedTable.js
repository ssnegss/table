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
                    
                    <TableHeaderComponent
                        className={getClassNamesFor("firstName")}
                        onClick={() => requestSort("firstName")}
                        name="First name"
                        value={firstNameSearchValue}
                        onChange={(e) => setFirstNameSearchValue(e.target.value)}
                    />
                    <TableHeaderComponent
                        className={getClassNamesFor("lastName")}
                        onClick={() => requestSort("lastName")}
                        name="Last name"
                        value={lastNameSearchValue}
                        onChange={(e) => setLastNameSearchValue(e.target.value)}
                    />
                    <TableHeaderComponent
                        className={getClassNamesFor("email")}
                        onClick={() => requestSort("email")}
                        name="Email"
                        value={emailSearchValue}
                        onChange={(e) => setEmailSearchValue(e.target.value)}
                    />
                    <TableHeaderComponent
                        className={getClassNamesFor("phone")}
                        onClick={() => requestSort("phone")}
                        name="Phone number"
                        value={phoneSearchValue}
                        onChange={(e) => setPhoneSearchValue(e.target.value)}
                    />
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

    return (
        <div className="myTable">
            <SortedTable products={mydata} />
        </div>
    );
};
