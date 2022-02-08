import * as React from "react";
import { useState } from "react";
import { useSortableData } from "../../customHooks/useSortableData";
import { TableHeaderComponent } from "../TableHeaderComponent/TableHeaderComponent";
import "./SortedTableComponent.css";

export const SortedTableComponent = (props) => {
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
                            buttonDisabled={
                                tableColumn.isSortable ? false : true
                            }
                            onClick={() => requestSort(tableColumn.className)}
                            name={tableColumn.columnName}
                            inputReadOnly={
                                tableColumn.isSearchable ? false : true
                            }
                            value={firstNameSearchValue}
                            onChange={(e) =>
                                setFirstNameSearchValue(e.target.value)
                            }
                        />
                    ))}
                </tr>
            </thead>
            <tbody>
                {items
                    // .filter((item) =>
                    //     item[props.tableColumns.className].match(
                    //         new RegExp(firstNameSearchValue, "i")
                    //     )(console.log(props.tableColumns.className))
                    // )
                    .filter((item) =>
                        item.lastName.match(
                            new RegExp(lastNameSearchValue, "i")
                        )
                    )
                    .filter((item) =>
                        item.email.match(new RegExp(emailSearchValue, "i"))
                    )
                    .filter((item) =>
                        item.phone.match(new RegExp(phoneSearchValue, "i"))
                    )
                    .map((item) => (
                        <tr key={item.id}>
                            {props.tableColumns.map((tableColumn) => {
                                // var fieldName = Object.keys(item).find(
                                //     (a) => a == tableColumn.className
                                // );
                                return <td>{item[tableColumn.className]}</td>;
                            })}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};


