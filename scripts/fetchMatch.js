window.onload = function() {
    cargarInfo();
}

function cargarInfo() {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);

    const nac = urlParams.get("nac");
    const genero = urlParams.get("genero");

    const request = new Request(
        `https://randomuser.me/api/?nat=${nac}&gender=${genero}`, 
        {
            method: 'get',
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }
    );

    fetch(request).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    }).catch(function(error){
        alert("Hubo un error encontrando a tu otra mitad :(");
    })
}

function llenarInfo(data) {
    const img = document.getElementById("img");
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const dob = document.getElementById("dob");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const country = document.getElementById("country");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const cell = document.getElementById("cellphone");
}