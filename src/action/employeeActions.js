export const employeeGetAll = () => {
  return {
    type: "employee/getAll",
    data: {}
  };
};

export const employeeAdd = (employee) => {
  let id = employee.name;
  return {
    type: "employee/add",
    data: { ...employee, id: id }
  };
};
export const employeeUpdate = (employee) => {
  return {
    type: "employee/update",
    data: employee
  };
};
export const employeeDelete = (employee) => {
  return {
    type: "employee/delete",
    data: employee
  };
};
