
// Fetch Random Fun Fact
function fetchFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById("fact").innerText = data.fact;
        })
        .catch(error => console.error("Error fetching fact:", error));
}

// Fetch Random User
function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById("user").innerText = 
                `👤 ${user.name.first} ${user.name.last}, 📍 ${user.location.country}`;
        })
        .catch(error => console.error("Error fetching user:", error));
}
