export interface Gift {
    id: number;
    name: string;
    url: string;
}

class DataService {

    private static DB_URL = "http://localhost:4000";

    public async getGifts(): Promise<Gift[]> {

        let todoResponsePromise: Promise<Response> = fetch(`${DataService.DB_URL}/gifts`);

        let response: Response = await todoResponsePromise;

        let jsonPromise: Promise<Gift[]> = (response).json();

        return await jsonPromise;
    }
}

let dataService = new DataService();
export default dataService;
