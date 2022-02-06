import * as React from "react";
import { useSortableData } from '../customHooks/useSortableData'

export const TableHeaderComponent = (props) => {
    // const { requestSort, sortConfig } = useSortableData(props.products);
    // const getClassNamesFor = (name) => {
    //     if (!sortConfig) {
    //         return;
    //     }
    //     return sortConfig.key === name ? sortConfig.direction : undefined;
    // };

    return (
        <th>
            <button
                type="button"
                onClick={props.onClick}
                className={props.className}
                //onClick={() => requestSort(`${props.className}`)}
                //className={getClassNamesFor(`${props.className}`)}
            >
                {props.name}
            </button>
        </th>
    );
};
