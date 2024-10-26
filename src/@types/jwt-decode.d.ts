declare module 'jwt-decode' {
    export default function jwtDecode(token: string): { [key: string]: any };
}
