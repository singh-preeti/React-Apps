const initializeState = {
  employees: []
};

const EmployeeReducer = (state = initializeState, action) => {

  switch (action.type) {
    case "employee/add":
      if (!state.employees) state.employees = [];
      return { employees: [...state.employees, action.data] };

    case "employee/update":
      const updateEmployee = state.employees.map((el) =>
        el.id === action.data.id ? { ...action.data, id: action.data.name } : el
      );
      return { employees: updateEmployee };

    case "employee/delete":
      const Employee = state.employees.filter((el) => el.id !== action.data.id);
      return { employees: Employee };
      
    case "employee/getAll":
    default:
      return state;
  }
};

export default EmployeeReducer;
