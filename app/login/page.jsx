// "use client"
// // import { useCredentials } from "next-auth/client";
// import { signIn } from "next-auth/react";

// export default function Login() {
//   // const { email, password } = useCredentials();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     signIn("credentials", {
//       username: 'ali',
//       password: 'ali123',
//       redirect: false
//     })
//     // const data = {
//     //   "id": 2,
//     //   "firstName": "Sheldon",
//     //   "lastName": "Quigley",
//     //   "maidenName": "Cole",
//     //   "age": 28,
//     //   "gender": "male",
//     //   "email": "hbingley1@plala.or.jp",
//     //   "phone": "+7 813 117 7139",
//     //   "username": "hbingley1",
//     //   "password": "CQutx25i8r",
//     //   "birthDate": "2003-08-02",
//     //   "image": "https://robohash.org/doloremquesintcorrupti.png",
//     //   "bloodGroup": "O+",
//     //   "height": 187,
//     //   "weight": 74,
//     //   "eyeColor": "Brown",
//     //   "hair": {
//     //     "color": "Blond",
//     //     "type": "Curly"
//     //   },
//     //   "domain": "51.la",
//     //   "ip": "253.240.20.181",
//     //   "address": {
//     //     "address": "6007 Applegate Lane",
//     //     "city": "Louisville",
//     //     "coordinates": {
//     //       "lat": 38.1343013,
//     //       "lng": -85.6498512
//     //     },
//     //     "postalCode": "40219",
//     //     "state": "KY"
//     //   },
//     //   "macAddress": "13:F1:00:DA:A4:12",
//     //   "university": "Stavropol State Technical University",
//     //   "bank": {
//     //     "cardExpire": "10/23",
//     //     "cardNumber": "5355920631952404",
//     //     "cardType": "mastercard",
//     //     "currency": "Ruble",
//     //     "iban": "MD63 L6YC 8YH4 QVQB XHIK MTML"
//     //   },
//     //   "company": {
//     //     "address": {
//     //       "address": "8821 West Myrtle Avenue",
//     //       "city": "Glendale",
//     //       "coordinates": {
//     //         "lat": 33.5404296,
//     //         "lng": -112.2488391
//     //       },
//     //       "postalCode": "85305",
//     //       "state": "AZ"
//     //     },
//     //     "department": "Services",
//     //     "name": "Aufderhar-Cronin",
//     //     "title": "Senior Cost Accountant"
//     //   },
//     //   "ein": "52-5262907",
//     //   "ssn": "447-08-9217",
//     //   "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30"
//     // }
//     // signIn("credentials", {
//     //   data
//     //  })

//     const response = await fetch(
//       `https://dummyjson.com/auth/login`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: 'kminchelle',
//           password: '0lelplR',
//         }),
//       }
//     );
//     console.log("response", response)

//     if (response.ok) {
//       const data = await response.json();
//       console.log("data login", data)
//       signIn("credentials", {
//         redirect: false,
//        data
//       })

//     } else {
//       const error = await response.json();

//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Email" value={'kminchelle'} />
//       <input type="password" placeholder="Password" value={'0lelplR'} />
//       <button type="submit">Login</button>
//       <button onClick={() => signIn("google")}>Sign in with Google</button>
//     </form>
//   );
// }

"use client"
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

function Form() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    signIn('credentials', {
      username: name,
      password
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-5 max-w-xs w-full bg-white shadow-lg rounded-lg">
      <div className="head text-center">
        <h3 className="font-semibold">You must be sign in to join</h3>
        <small>we are A Team that guides Each other</small>
      </div>
      <button
        onClick={() => signIn("github")}
        type="button"
        className="bg-slate-800 my-4 text-white p-3 rounded-lg">
        Sign in with Github
      </button>
      <div className="relative my-3">
        <hr />
        <small className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-8 text-center">
          Or
        </small>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Email or Username</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="p-3 border border-slate-700 rounded-lg"
            id="name"
            placeholder="Uname@mail.com"
            required
          />
        </div>
        <div className="flex mt-2 flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            className="p-3 border border-slate-700 rounded-lg"
            placeholder="Password"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-slate-900 text-white p-3 rounded-lg">
        Sign in
      </button>
    </form>
  );
}

export default Form;
