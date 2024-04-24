async function fetchData() {
    try {

        // Fetching Data from json to object form
        let res = await fetch("https://reqres.in/api/users");
        let data = await res.json();
        
        // Catching root element from html
        let root = document.getElementById("root");
        for (let user of data.data) {
            // Creating card for each user
            let card = document.createElement("div");
            let img = document.createElement("img");
            img.src = user.avatar;
            let name = document.createElement("h3");
            name.innerText = `Name : ${user.first_name}`;
            let email = document.createElement("p");
            email.innerText = `Email : ${user.email}`;
            // Appending all the elements to card
            card.append(img, name, email);
            // Appending card to root element
            root.append(card);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Adding Eventlistener to button to fetch Data
document.getElementById("fetch-Data").addEventListener("click", fetchData);