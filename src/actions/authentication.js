export const LOG_USER_IN = "LOG_USER_IN";

export function loginUser(userId){
    return {type: LOG_USER_IN, userId};
}