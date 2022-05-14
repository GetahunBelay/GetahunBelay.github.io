async function fetchDataJSON() {

    function append(parent, element) {
        return parent.appendChild(element)
    }
    function createUser(element) {
        return document.createElement(element)
    }

    try {
        const response = await fetch("https://randomuser.me/api/?results=4");//return header and body
        const data = await response.json();// return parsed body
        console.log(data)
        let arr = data.results
        return arr.map(obj => {
            let li = createUser("li");
            let img = createUser("img");
            let name = createUser("p");
            let phone = createUser("p");
            let email = createUser("p");

            name.innerHTML = (`${obj.name.first} ${obj.name.last}`.bold())
            phone.innerHTML = obj.phone
            email.innerHTML = obj.email
            img.src = obj.picture.large

            append(document.getElementById("users"), img)
            append(li, name);
            append(li, phone);
            append(li, email);
            append(document.getElementById("users"), li);
        })
    } catch (err) {
        document.getElementById("err").innerHTML = err
    }
}

function refreshPage() {
    window.location.reload();
}
window.onload = fetchDataJSON