import * as React from "react";
import "./TableHeaderComponent.css";

export const TableHeaderComponent = (props) => {
    return (
        <th>
            <div className="tableHeader">
                <button
                    type="button"
                    onClick={props.onClick}
                    className={props.className}
                >
                    {props.name}
                </button>
                <input
                    type="text"
                    className="searchField"
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </th>
    );
};
