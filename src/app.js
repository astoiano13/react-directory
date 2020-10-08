import React from "react";
import employees from "./employees.json"

class App extends React.Component {
    state = {
        employeeList: employees
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
                    {this.state.employeeList.map(employee=>(
                        <tr>
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
