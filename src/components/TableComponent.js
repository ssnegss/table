import * as React from "react";
import { TableHeaderComponent as ThComponent } from "./TableHeaderComponent";

export class BasicTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: [] };
        this.onSort = this.onSort.bind(this);
    }

    componentDidMount() {
        fetch(
            "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
        )
            .then(function (response) {
                return response.json();
            })
            .then((items) => this.setState({ data: items }));
    }

    onSort(event, sortKey) {
        const data = this.state.data;
        data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        this.setState({ data });
    }

    render() {
        let newdata = this.state.data;

        return (
            <table className="table is-bordered is-hoverable is-fullwidth has-text-centered">
                <thead>
                    <tr>
                        <th> id </th>
                        <ThComponent
                            name="First name"
                            onClick={(e) => this.onSort(e, "firstName")}
                        />
                        <ThComponent
                            name="Last name"
                            onClick={(e) => this.onSort(e, "lastName")}
                        />
                        <ThComponent
                            name="Email"
                            onClick={(e) => this.onSort(e, "email")}
                        />
                        <ThComponent
                            name="Phone number"
                            onClick={(e) => this.onSort(e, "phone")}
                        />
                    </tr>
                </thead>
                <tbody>
                    {newdata.map(function (user) {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
