export interface Gift {
    id: number;
    name: string;
    url: string;
}

export interface User {
    id: number;
    name: string;
    desiredGiftId: number;
    secretSantaId: number;
}

class DataService {

    private static DB_URL = "http://localhost:4000";

    public async getGifts(): Promise<Gift[]> {

        let todoResponsePromise: Promise<Response> = fetch(`${DataService.DB_URL}/gifts`);

        let response: Response = await todoResponsePromise;

        let jsonPromise: Promise<Gift[]> = (response).json();

        return await jsonPromise;
    };

    public async getReceiver(): Promise<User[]> {

        //    Назначаем вместо пустого id 1234567890 потому что server-json не умеет фильтровать null

        let peopleResponsePromise: Promise<Response> = fetch(`${DataService.DB_URL}/users?secretSantaId=1234567890&_order=asc&_limit=1`);

        let response: Response = await peopleResponsePromise;

        let jsonPromise: Promise<User[]> = (response).json();

        return await jsonPromise;
    };

    public async createUser(newUser: User): Promise<User[]> {

        delete newUser.id;

        let peopleResponsePromise: Promise<Response> = fetch(`${DataService.DB_URL}/users`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(newUser)
        });

        let response: Response = await peopleResponsePromise;

        let jsonPromise: Promise<User[]> = (response).json();

        return await jsonPromise;
    };

    public async updateUser(user: User, secretSantaId: number): Promise<User[]> {

        let secretSanta = {"secretSantaId": secretSantaId}

        let peopleResponsePromise: Promise<Response> = fetch(`${DataService.DB_URL}/users/${user.id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(secretSanta)
        });

        let response: Response = await peopleResponsePromise;

        let jsonPromise: Promise<User[]> = (response).json();

        return await jsonPromise;
    };

}

let dataService = new DataService();
export default dataService;
