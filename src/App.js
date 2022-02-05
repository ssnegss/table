import { BasicTable } from "./components/TableComponent";

function App() {
    function createData(col_1, col_2, col_3, col_4, col_5) {
        return { col_1, col_2, col_3, col_4, col_5 };
    }

    const products = [
        createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
        createData("Eclair", 262, 16.0, 24, 6.0),
        createData("Cupcake", 305, 3.7, 67, 4.3),
        createData("Gingerbread", 356, 16.0, 49, 3.9),
    ];

    return (
        <div className="App">
            <BasicTable id = "id" firstName="Имя" lastName="Фамилия" email="Почта" phoneNumber="Номер телефона"/>
        </div>
    );
}

export default App;
