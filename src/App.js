import { BasicTable } from "./components/TableComponent";
import SortedTable from "./components/SortedReactTable";

function App() {
    return (
        <div className="App">
            <SortedTable />
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
