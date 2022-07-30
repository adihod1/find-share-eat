export function objectToLoginSchema(user) {
    return {
        lastName: user.family_name,
        firstName: user.given_name,
        userName: user.name,
        email: user.email,
        password: user.picture
    };
}
