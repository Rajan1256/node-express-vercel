let query = "{ boards (limit:5) {name id} }";

fetch("https://api.monday.com/v2", {
  method: "post",
  headers: {
    "Content-Type": "application/json",
    Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIzNzc1NDI3OCwidWlkIjoyNzY5ODA5MSwiaWFkIjoiMjAyMy0wMi0xNlQxMjoxNTowNi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6OTk2NjQyOSwicmduIjoidXNlMSJ9.7MM07gU0ivrKbXsNFQzhp8aYlgrWt4v2oNtNYTIiOHI",
  },
  body: JSON.stringify({
    query: query,
  }),
})
  .then((res) => res.json())
  .then((res) => console.log(JSON.stringify(res, null, 2)));
