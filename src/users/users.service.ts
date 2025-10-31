import { backendURL } from "@/constants";

export default class UsersService {
    static url = backendURL;

    static async createUser(username:string, results:number) {
        try {
            await fetch(UsersService.url+"/users",{
                method:'POST',
                headers:{
                    "Access-Control-Allow-Origin":"http://localhost:5173/ElectroSim/"
                },
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