import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares"

export default {
    Mutation: {
        editPost: async (_, args, { request }) => {
            isAuthenticated(request);
            const { id, caption, location, action } = args;
            const { user } = request;
            const post = await prisma.$exists.post({ id, user: { id: user.id } });
            console.log(post);
            if (post) {
                if (action === "EDIT") {
                    return prisma.updatePost({data :{caption, location}, where:{id}})
                } else if (action === "DELETE") {
                    return prisma.deletePost({id})
                }
            } else  {
                throw Error ("You can`t do that !")
            }
        }
    }
}