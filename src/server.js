require("dotenv").config()
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

// 그래프 큐엘 서버는 express 서버가 내장되어 있음

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ port: PORT }, () => console.log(`✔ Server running on http://localhost:${PORT}`)
);