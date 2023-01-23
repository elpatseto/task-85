import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    const ul = document.querySelector("ul");

    let url = "https://pokeapi.co/api/v2/pokemon?limit=10";

    function checkStatus(responce) {
        if (responce.status >= 200 && responce.status < 300) {
            return Promise.resolve(responce);
        } else {
            return Promise.reject(new Error(responce.statusText));
        }
    }

    function toJSON(responce) {
        return responce.json();
    }


    fetch(url)
        .then(checkStatus)
        .then(toJSON)
        .then((data) => {
            data.results.forEach(d => {
                let li = document.createElement("li");
                li.innerText = d.name;
                ul.append(li);
            });
        });

});
