import express, { json } from "express";
import cors from "cors";
import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";
import router from "./routes/index.js";

const server = express();
server.get('/health', (req, res) => {
    res.send('OKAY');
});


server.use(json());
server.use(cors());

server.use(router);

server.listen(process.env.PORT, () => {
    console.log("Server is listening on http://localhost:5000/");

});
// server.listen(process.env.PORT, () => console.log("Server running on port " + process.env.PORT));





// import express, { json } from "express";
// import cors from "cors";

// // import router from "./routes/index.js";

// const server = express();
// server.get('/teste', (req, res) => {
//     res.send('OKAY');
// });

// server.use(json());
// server.use(cors());
// // server.use(router);

// server.listen(process.env.PORT, () => console.log("Server running on port " + process.env.PORT));