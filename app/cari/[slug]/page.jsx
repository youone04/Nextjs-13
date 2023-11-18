import React from 'react';

// import { Container } from './styles';

async function getData(params){
  const res = await fetch(`https://api.github.com/users/${params}`)
  return await res.json()
}

async function Detail({params}) {

  const data  = await getData(params.slug)

  return (
    <div>
     <p> Detail User : {params.slug}</p>
     <div>
      {
        JSON.stringify(data)
      }
     </div>
    </div>
  );
}

export default Detail;