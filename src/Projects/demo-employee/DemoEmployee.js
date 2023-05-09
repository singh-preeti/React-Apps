import React from "react";
import Header from "./header";
import EmployeeForm from "./employee-form";
import EmployeeList from "./employee-list";
import { Route, Switch } from "react-router-dom";
import EmployeeUpdateForm from "./employee-update-form";

export default function DemoEmployee() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <EmployeeForm />
        </Route>
        <Route path="/employees">
          <EmployeeList />
        </Route>
        <Route path="/:id">
          <EmployeeUpdateForm />
        </Route>
      </Switch>
    </div>
  );
}
