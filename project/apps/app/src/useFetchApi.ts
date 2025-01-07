import { useEffect, useState } from 'react';

const useFetchApi = () => {
    const [data, setData] = useState<{name: string, url: string}[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchApi = async() => {
        setLoading(true);
        setError("")
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const dataResponse = await response.json();
            setData(dataResponse.results);
        }catch(error: unknown){
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError(String(error));
            }
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchApi()
    },[])

  return {
    data,
    loading,
    error
  }
}

export default useFetchApi