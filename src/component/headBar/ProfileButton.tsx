import { useEffect, useState } from "react";
import { useUserStore } from "../../shared/userStore"
import ProfileDropdown from "./ProfileDropdown";


export default function ProfileButton(){
  const user = useUserStore((s) => s.user);
  const [img,setImg] = useState("");
  useEffect(()=>{
    if(user?.name){
      setImg(user.profileImageUrl as string);
    }
  },[user]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  
  return <div
    onClick={toggleDropdown}
    className={`w-10 h-10 rounded-full bg-gray-400 cursor-pointer`}
    style={{
      backgroundImage: `url('${img}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {isDropdownOpen && <ProfileDropdown/>}
  </div>;
}