import * as React from "react";

export const TableHeaderComponent = (props) => {
    return (
        <th>
            <button onClick={props.onClick}>
                {props.name}
            </button>
        </th>
    );
};
