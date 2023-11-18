import React from 'react';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then(res => res.json())

function SectionResult({query}) {
    const { data, error, isLoading } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
   
  return (
    <>
    {
        isLoading? <p>Loading ...</p>:
        error? <p>Kesalahan</p>:
        JSON.stringify(data)
    }
    </>
  );
}

export default SectionResult;