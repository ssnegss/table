import { BasicTable } from "./components/TableComponent";

function App() {

    return (
        <div className="App">
            <BasicTable id = "id" firstName="Имя" lastName="Фамилия" email="Почта" phoneNumber="Номер телефона"/>
        </div>
    );
}

export default App;
