import React from "react";
import employees from "./employees.json"

class App extends React.Component {
    state = {
        employeeList: employees,
        sortOrder: ""
    }
    handleSort = () => {
        console.log("test")
        let newSort
        if (this.state.sortOrder !== "des") {
            newSort = this.state.employeeList.sort((a, b) => {
                return a.name - b.name;
            }
            );
        }
        else {
            newSort = this.state.employeeList.sort((a, b) => {
                return b.name - a.name;
            }
            );
        }
        console.log(newSort)
        const newSortOrder = this.state.sortOrder === "des"? "asc":"des"
        this.setState({ employeeList: newSort, sortOrder:newSortOrder })
    }

    render() {
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Title</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employeeList.map(employee => (
                            <tr key={employee.id}>
                                <th scope="row">{employee.id}</th>
                                <td>{employee.name}</td>
                                <td>{employee.title}</td>
                                <td>{employee.email}</td>
                            </tr>

                        ))}

                    </tbody>
                </table>


            </>
        );
    }
}

export default App