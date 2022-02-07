import { BasicTable } from "./components/TableComponent";
import { ProductTable } from "./components/SortedTableComponent/SortedTable";

function App() {
    return (
        <div className="App">
            <ProductTable />
            {/* <BasicTable
                id="id"
                firstName="Имя"
                lastName="Фамилия"
                email="Почта"
                phoneNumber="Номер телефона"
            /> */}
        </div>
    );
}

export default App;
