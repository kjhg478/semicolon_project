import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares"

export default {
    Mutation: {
        follow: async (_, args, { request }) => {
            isAuthenticated(request);
            const { id } = args;
            const { user } = request;

            try {
                await prisma.updateUser({
                    where: { id },
                    data: {
                        followers: {
                            connect:{id:user.id}
                        }
                    }                    
                })
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        }
    }   
}