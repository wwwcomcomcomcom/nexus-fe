import { useNavigate } from "react-router-dom";

export default function LoginButton(){
  const navigate = useNavigate();
  return <button
    onClick={()=>navigate('/login')}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Login
  </button>;
}