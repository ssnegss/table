import * as React from "react";
import { useSortableData } from "../customHooks/useSortableData";
import { TableHeaderComponent } from "./TableHeaderComponent";

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
                        className={getClassNamesFor("name")}
                        onClick={() => requestSort("name")}
                        name="Name"
                    />
                    <TableHeaderComponent
                        className={getClassNamesFor("price")}
                        onClick={() => requestSort("price")}
                        name="Price"
                    />
                    <TableHeaderComponent
                        className={getClassNamesFor("stock")}
                        onClick={() => requestSort("stock")}
                        name="Stock"
                    />
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default function SortedTable() {
    return (
        <div className="App">
            <ProductTable
                products={[
                    { id: 1, name: "Cheese", price: 4.9, stock: 20 },
                    { id: 2, name: "Milk", price: 1.9, stock: 32 },
                    { id: 3, name: "Yoghurt", price: 2.4, stock: 12 },
                    { id: 4, name: "Heavy Cream", price: 3.9, stock: 9 },
                    { id: 5, name: "Butter", price: 0.9, stock: 99 },
                    { id: 6, name: "Sour Cream ", price: 2.9, stock: 86 },
                    {
                        id: 7,
                        name: "Fancy French Cheese 🇫🇷",
                        price: 99,
                        stock: 12,
                    },
                ]}
            />
        </div>
    );
}
