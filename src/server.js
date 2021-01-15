import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport"

// 그래프 큐엘 서버는 express 서버가 내장되어 있음


const PORT = process.env.PORT;

const server = new GraphQLServer({ schema, context: ({ request }) => ({ request })});
// context resover와 정보를 공유할 때 사용함
server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () => console.log(`༼ つ ◕_◕ ༽つ Server running on http://localhost:${PORT}`)
);