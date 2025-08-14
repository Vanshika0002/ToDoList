const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const data = document.getElementById("input").value.trim();

    if (data === "") {
        alert("please fill the field");
    }
    const li = document.createElement("li")
    li.className = "Data_List";
    li.innerHTML = `${data} <span>&times;</span>`;

    const List = document.querySelector("#List");
    List.appendChild(li);


    saveToLocal(data);
    UpdateList();
    listRemove();


});

function saveToLocal(data) {
    let items = JSON.parse(localStorage.getItem("My List Data")) || [];
    items.push(data);
    localStorage.setItem("My List Data", JSON.stringify(items));
}

function UpdateList() {
    const items = document.querySelectorAll("#List li");
    items.forEach((item, index) => {
        if (index % 2 === 0) {
            item.style.backgroundColor = "#d9d9d9";
        }
        else {
            item.style.backgroundColor = "#eee";
        }
    })
}

function listRemove() {
    const spans = document.querySelectorAll("#List li span");
    spans.forEach((span) => {
        span.onclick = (e) => {
            e.target.parentElement.remove();
            UpdateList();
        };
    });
}

