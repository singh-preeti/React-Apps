import React, { Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { connect } from "react-redux";
import { useParams, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { employeeGetById, employeeUpdate } from "../../action/employeeActions";

// function withParams(Component) {
//   return (props) =>{console.log(props); return <Component {...props} params={useParams()} />;}
// }

class EmployeeUpdateForm extends Component {
  state = { existedEmployee: {}, empId: "" };
  employee = { name: "", age: 0, department: "" };

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.id;
    this.setState({
      existedEmployee: this.props.employees.filter((i) => i.id === id && i)[0],
      empId: id
    });
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      employeeUpdate({ id: this.state.empId, ...this.employee })
    );
    e.target.reset();
    this.employee = { name: "", age: 0, department: "" };
  
  };
  render() {
    console.log(this.props)
    const { name, age, department } = this.state.existedEmployee;
    return (
      <div className="container m-5">
        <h4 className="mb-3">Update Employee</h4>
        <form
          className="needs-validation w-50 d-block m-auto m-3"
          noValidate
          onSubmit={this.handleOnSubmit}
        >
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                Name
              </label>
              <input
                // value={name}
                type="text"
                className="form-control"
                id="name"
                placeholder={name}
                onChange={(e) => (this.employee.name = e.target.value)}
                required
              />
              <div className="invalid-feedback">Valid name is required.</div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Age
              </label>
              <input
                // value={age}
                type="number"
                className="form-control"
                id="age"
                placeholder={age}
                onChange={(e) => (this.employee.age = e.target.value)}
                required
              />
              <div className="invalid-feedback">Valid Age is required.</div>
            </div>

            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Department
              </label>
              <div className="input-group has-validation">
                <input
                  // value={department}
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder={department}
                  onChange={(e) => (this.employee.department = e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Your department is required
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-success m-2" type="submit">
                Submit
              </button>
              <button
                className="btn btn-warning m-2"
                // onClick={() => this.props.navigate("/employees")}
              >
                {/* Cancel */}
                <Link to={"/employees"}> Cancel</Link>
              </button>
              <button className="btn btn-warning m-2">
                <Link to={"/employees"} className="m-2">
                  Go to List
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
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

export default connect(mapStateToProps)(withRouter(EmployeeUpdateForm));
