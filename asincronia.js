const apiUrl = "https://jsonplaceholder.typicode.com/users"

axios.get(apiUrl)
    .then(response => {
        console.log(response.data); // Imprime la lista completa de usuarios
    })


fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la red');
            
        }
        return response.json();
        })
        .then(data => {
            data.forEach(user => {
                console.log(user.name); // Imprime solo el nombre de cada usuario
            })
        })

let users = [] 
const apiUrl2 = "https://jsonplaceholder.typicode.com/users"

axios.get(apiUrl)
    .then(response => {
        users = response.data })
console.log(users)

function showUsers() {
    console.log(users)
}

axios.get(apiUrl)
    .then(response => {
        users = response.data
        showUsers();
    })