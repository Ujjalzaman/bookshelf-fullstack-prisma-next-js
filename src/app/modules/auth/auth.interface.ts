export type ILogin = {
    email: string;
    password: string;
}
export type ILoginResponse = {
    accessToken: string;
    refreshToken?: string | undefined;
}