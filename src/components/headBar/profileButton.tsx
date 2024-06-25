// import {Props} from "../../utils/typedef.ts";

import { useEffect, useState } from "react";
import { findUserData, useTokenStore, useUserStore } from "../../shared/userStore"


export default function ProfileButton(){
  const accessToken = useTokenStore((s) => s.accessToken);
  const user = useUserStore((s) => s.user);
  const [img,setImg] = useState("");
  console.log("hello");
  useEffect(()=>{
    findUserData(user,accessToken!).then((data) => {
      setImg(data.avatar_url as string);
    });
  },[user,accessToken]);

  return <div
    className={`w-8 h-8 rounded-full bg-gray-400`}
    style={{
      backgroundImage: `url('${img}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
}