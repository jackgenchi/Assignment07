// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [11111111,"ZAK",1111,"ZAK@VECTACORP.COM","Sales"],
    [22222222,"JESSICA",2222,"JESSICA@VECTACORP.COM","QA"],
    [33333333,"MARK",3333,"MARK@VECTACORP.COM","Engineering"],
    [44444444,"FRED",4444,"FRED@VECTACORP.COM","Administrative"],
    [55555555,"SALLY",5555,"SALLY@VECTACORP.COM","Executive"]
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if(localStorage.people && JSON.parse(localStorage.people).length !== 0){
    employees = JSON.parse(localStorage.getItem('people'));
    console.log("employees array found in local storage: "+ employees);
}else{
    localStorage.setItem('people',JSON.stringify(employees));
    console.log("employees array NOT FOUND in local storage. Employees array: " + employees);
}

// GET DOM ELEMENTS
let form = document.getElementById("addForm");
let table = document.getElementById("empTable");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employees);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let tempEmpArray = [];
    for (let i of e.target){
        if(i.type === "submit")
            break;
        tempEmpArray.push(i.value);
    }
    
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(tempEmpArray);
    // BUILD THE GRID
    buildGrid(employees);
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
function delEventListener(empTable,delArray) {
    empTable.addEventListener('click', (e) => {
        // CONFIRM THE DELETE
        if(confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            
            let delArrayIndex = employees.indexOf(delArray);
            console.log(`Employee Index: ${delArrayIndex}`);
            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(delArrayIndex, 1);
            // BUILD THE GRID
            buildGrid(employees);
        }            
    });
}


// BUILD THE EMPLOYEES GRID
function buildGrid(empArray) {
    console.log("running buildGrid");
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    document.querySelector("tbody").remove();
    // REBUILD THE TBODY FROM SCRATCH
    const tbody = document.createElement("tbody");
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for(let i of empArray) {
        //console.log("i Loop value: "+i);
        const row = document.createElement("tr");
        for(let j of i) {
            //console.log("j Loop value: "+j);
            const cell = document.createElement("td");
            const cellVal = document.createTextNode(`${j}`);
            cell.appendChild(cellVal);
            row.appendChild(cell);
        }
        //console.log("row: " + row);
        //CREATE THE DELETE BUTTON
        let deleteBtn = document.createElement('button');
        //add event listener
        delEventListener(deleteBtn,i);
        // add classes
        deleteBtn.className = `btn btn-danger btn-sm float-end delete`;
        // create text to append to button
        let textDelete = document.createTextNode('X');
        // append text to delete button
        deleteBtn.appendChild(textDelete);
        //append delete button to 'tr'
        row.appendChild(deleteBtn);
        tbody.appendChild(row);
    } 
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    if((empArray.length) === 0) {
        document.querySelector('#empCount').innerHTML = "";
    }else { //if not empty, set value equal to number of entries
        document.querySelector('#empCount').innerHTML = `(${empArray.length})`;
    } 
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('people',JSON.stringify(employees));
};