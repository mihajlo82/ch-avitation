import { FAKE_DATA } from "../fake_data/Fake_Data";

export const GET_DATA = async () => {
    const {result, status, error} = await FAKE_DATA;

    try
    {
       const data = !!status && !error && result;

       if(!!data) return data;
       else throw new Error('Data fethcing error...');    
    }
    catch
    {
        return [];
    }
}