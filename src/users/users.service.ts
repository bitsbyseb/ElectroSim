import { backendURL } from "@/constants";

export default class UsersService {
    static url = backendURL;

    static async createUser(username:string, results:number) {
        if (!backendURL) {
            return;
        }
        try {
            await fetch(UsersService.url+"/users",{
                method:'POST',
                body: JSON.stringify({
                    username,
                    results
                })
            });
        } catch {
            return;
        }
    }
}