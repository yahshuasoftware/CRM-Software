// /src/mock/mockData.js
export const mockDepartments = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'Finance' },
    { id: 3, name: 'Engineering' },
  ];
  
  export const fetchDepartments = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockDepartments), 500);
    });
  };
  
  export const addDepartment = (newDepartment) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        mockDepartments.push({ id: mockDepartments.length + 1, ...newDepartment });
        resolve(newDepartment);
      }, 500);
    });
  };
  