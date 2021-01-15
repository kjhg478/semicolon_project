import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";
import { USER_FRAGEMENT } from "../../../fragments";

export default {
    Query: {
        me: async (_, __, { request }) => {
            isAuthenticated(request);
            const { user } = request;
            
            const UserProfile = await prisma.user({ id: user.id });
            
            const posts = await prisma.user({ id: user.id }).posts();
            console.log(posts);
            return {
                user: UserProfile,
                posts
            };
        }
    }
};

// export default {
//     Query:  {
//     me: async (_, __, { request }) => {
//         isAuthenticated(request);
//         const { user } = request;
//         return prisma.user({ id: user.id }).$fragment(USER_FRAGEMENT);
//         }
//     }
// }