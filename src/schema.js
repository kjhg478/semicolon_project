import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";



const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"))
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"))

// api 폴더 밑에는 resolver가 아닌 js 파일을 두면 안된다 ! 만약 resolver가 아닌 js파일을 두면 오류남 (resolover을 위한 js파일)

const schema = makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
});
// api 폴더의 모든 파일들을 schema 파일에서 한번에 받는다
export default schema;