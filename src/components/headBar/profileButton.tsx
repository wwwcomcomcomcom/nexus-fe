// import {Props} from "../../utils/typedef.ts";

import { useEffect, useState } from "react";
import { findUserData, useTokenStore, useUserStore } from "../../shared/userStore"


export default function ProfileButton(){
  const accessToken = useTokenStore((s) => s.accessToken);
  const user = useUserStore((s) => s.user);
  const [img,setImg] = useState("");
  useEffect(()=>{
    findUserData(user,accessToken!).then((data) => {
      setImg(data.avatar_url as string);
    });
  },[user,accessToken]);
  
  return <div
    className={`w-10 h-10 rounded-full bg-gray-400 cursor-pointer`}
    style={{
      backgroundImage: `url('${img}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
}