import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { employeeDelete, employeeGetAll } from "../../action/employeeActions";

class EmployeeList extends React.Component {

  componentDidMount() {
    this.props.dispatch(employeeGetAll());
  }
  deleteHandler = (emp) => {
    this.props.dispatch(employeeDelete(emp));
  };
  render() {
    console.log(this.props);
    return (
      <main className="container m-5">
        <h2>Employee List</h2>
        <div className="table-responsive m-3">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {this.props.employees &&
                this.props.employees.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.department}</td>
                    <td>
                      <button
                        className="btn btn-info mx-2"
                      >
                        <Link to={`/${item.name}`}>Edit</Link>
                      </button>
                      <button
                        className="btn btn-danger m-2"
                        onClick={() => this.deleteHandler(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { employees } = state.Employee;
  return {
    employees
  };
}

export default connect(mapStateToProps)(EmployeeList);
