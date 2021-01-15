import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";


export default {
    Mutation: {
        delComment: async (_, args, { request }) => {
            isAuthenticated(request);
            const { id } = args;
            const comment = await prisma.deleteComment({id});
            return comment; 
        }
    }
}