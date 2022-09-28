import React from 'react'
import Image from 'next/image'
import {signIn} from "next-auth/react"


const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
           <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png?20200820101156"
            height={240}
            width={240}
            alt="none" />
            <a onClick={signIn}className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white">Login</a>
    </div>
  )
}

export default Login