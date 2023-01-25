const inputEl = document.getElementById("input-el");
const saveBtnEl = document.getElementById("save-btn");
const leadsListEl = document.getElementById("leads-list");
let leads = [];

function renderLeads ( ) {
    let inputFieldVal = inputEl.value;

    // only when input field is not empty 
    if (inputFieldVal) {

        // push input value into array 
        leads.push(inputFieldVal);
        console.log(leads);
        // clear input field 
        inputEl.value = "";
    
        // render each field input as a link inside unordered list
        let listEl = document.createElement("li");
        let linkEl = document.createElement("a");
        linkEl.textContent = inputFieldVal;
        linkEl.setAttribute("href",inputFieldVal);
        linkEl.setAttribute("target","_blank");
        listEl.appendChild(linkEl);
        leadsListEl.appendChild(listEl);

    }
};

saveBtnEl.addEventListener("click", renderLeads);


// Add copy function 
// html scan 
// data base 
// excel
// previous searches saved in local st as btns 
