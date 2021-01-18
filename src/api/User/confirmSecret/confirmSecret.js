import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
    Mutation: {
        confirmSecret: async (_, args) => {
            
            const { email, secret } = args;
            const user = await prisma.user({ email });
            if (user.loginSecret === secret) {
                return generateToken(user.id);
            } else {
                throw Error("입력한 값이 맞지 않습니다. 값을 다시 입력해주세요");
            }
        }
    }
}