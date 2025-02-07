window.addEventListener('load', () => {
    document.getElementById('empForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const getValue = id => document.getElementById(id).value;
        console.log({
            EmployeeID: getValue('empId'),
            FullName: getValue('fullName'),
            Extension: getValue('extension'),
            Email: getValue('email'),
            Department: getValue('department')
        });
    });
});
