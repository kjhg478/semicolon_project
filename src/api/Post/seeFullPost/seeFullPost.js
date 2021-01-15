import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGEMENT, LIKE_FRAGMENT } from "../../../fragments";


export default {
    Query: {
    seeFullPost: async (_, args) => {
            const { id } = args;
            const post = await prisma.post({ id });
            const comments = await prisma.post({ id }).comments().$fragment(COMMENT_FRAGEMENT);
            const likeUser = await prisma.post({ id }).likes().$fragment(LIKE_FRAGMENT);
            console.log(likeUser);
            const likeCount = await prisma.likesConnection({
                where: { post: { id } }
            })
                .aggregate()
                .count()
            const files = await prisma.post({ id }).files();
            const user = await prisma.post({ id }).user();
            return {
            post, comments, likeCount, likeUser, files, user
        };
        }
        
    }
}