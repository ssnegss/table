import * as React from "react";
import { useSortableData } from "../customHooks/useSortableData";
import { TableHeaderComponent } from "./TableHeaderComponent";
import { GetTableData } from "../getTableData";

const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <table>
            <caption>Products</caption>
            <thead>
                <tr>
                    <TableHeaderComponent
                        className={getClassNamesFor("firstName")}
                        onClick={() => requestSort("firstName")}
                        name="First name"
                    />
                    <TableHeaderComponent
                        className={getClassNamesFor("lastName")}
                        onClick={() => requestSort("lastName")}
                        name="Last name"
                    />
                    <TableHeaderComponent
                        className={getClassNamesFor("email")}
                        onClick={() => requestSort("email")}
                        name="Stock"
                    />
                    <TableHeaderComponent
                        className={getClassNamesFor("phone")}
                        onClick={() => requestSort("phone")}
                        name="Phone"
                    />
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
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

export const SortedTable = () => {
    const [mydata, setmyData] = React.useState([]);

    async function GetTableData() {
        const response = await fetch(
            ` http://www.filltext.com/?rows=20&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
        );
        const data = await response.json();
        console.log(data);
        setmyData(data);
    }

    React.useEffect(async () => {
        GetTableData();
    }, []);

    return (
        <div className="myTable">
            <ProductTable products={mydata} />
        </div>
    );
};
