import {useState,useEffect} from 'react'


function useFetch(url) {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
      const AbortCont = new AbortController();

        fetch(url,{signal: AbortCont.signal})
        .then(res => {
          if(!res.ok){
            throw Error('could not fetch the data');
          }else
          return res.json();
        })
        .then(data=>{
          setData(data);
          setIsPending(false);
          setError(null)
        })
        .catch(err => {
          if(err.name !=='AbortError'){
            setIsPending(false);
            setError(err.message);
          }
          
        })
    },[url])

    return {data, isPending, error}
}

export default useFetch
