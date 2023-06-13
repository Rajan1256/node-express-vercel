module.exports = async (req, res) => {
    {
      let query = "{ boards (limit:5) {name id} }";
  
      let result = await fetch("https://api.monday.com/v2", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIzNzc1NDI3OCwidWlkIjoyNzY5ODA5MSwiaWFkIjoiMjAyMy0wMi0xNlQxMjoxNTowNi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6OTk2NjQyOSwicmduIjoidXNlMSJ9.7MM07gU0ivrKbXsNFQzhp8aYlgrWt4v2oNtNYTIiOHI",
        },
        body: JSON.stringify({
          query: query,
        }),
      });
      result = await result.json();
      res.json(result);
    }
  };