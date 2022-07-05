import express from "express";

const app = express();
const PORT = 3000;

// Our public folder contains a basic html file as well as our WASM file that we copied over from the dist folder
app.use(express.static('../public'));

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));