import {useState, useEffect, useCallback} from 'react'
import { GET_DATA } from '../api_service/Api_Service';

const useFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ImproveFetch();

        //cleanup func
         return () => setData([]);
    }, [])


    //Call fake data
    const FetchData = async() => {
        const data_fake = await GET_DATA(); 
        !!data_fake && setData(data_fake);
    }

    const ImproveFetch = useCallback(() => FetchData(), []);

  return {data, setData}
}

export default useFetch
