import $ from 'https://code.jquery.com/jquery-3.6.1.min.js';

const ser = new Service(conn);

function genCB(arr) {
    let html = "";

    for (let i = 1; i <= arr.length; i++) {
        const key = arr[i]["ID"];
        const value = arr[i]["typ"];
        html += `<label for='${key}'>${value}</label>`;
        html += `<input type='number' name='type[]' value='0'><br>`;
    }

    return html;
}

function genOptions(arr) {
    let html = "";

    for (let i = 1; i <= arr.length; i++) {
        const key = arr[i]["ID"];
        const value = arr[i]["name"];
        html += `<label for='${key}'>${value}</label>`;
        html += `<input type='radio' name='user' value='0'><br>`;
    }

    return html;
}

document.addEventListener("DOMContentLoaded", function() {
    const formDiv = document.getElementById("form");
    formDiv.innerHTML += genOptions(ser.getPeopleList());
    formDiv.innerHTML += genCB(ser.getTypesList());
    
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Uložit";
    formDiv.appendChild(button);
    
    const submitInput = document.createElement("input");
    submitInput.type = "submit";
    submitInput.value = "odeslat";
    formDiv.appendChild(submitInput);
});