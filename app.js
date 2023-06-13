const express = require("express");
const directus = require('./routers/directusrouter');
const monday = require('./routers/mondayrouter');

const app = express();
app.use(express.json());
app.use(monday);
app.use(directus);

app.listen(4000, () => {
  console.log("listening on http://localhost:4000");
});
