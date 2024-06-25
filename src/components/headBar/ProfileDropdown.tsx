import { useNavigate } from "react-router-dom";

export default function ProfileDropdown() {
  const navigate = useNavigate();

  function logout() {
    window.sessionStorage.removeItem("user-storage");
    location.reload();
  }

  return (
    <div className="relative w-20 -translate-x-1/2 translate-y-1/2">
      <button
        onClick={() => navigate("/profile")}
        className="w-full bg-gray-300 border-1 border-gray-600 px-4 py-2 rounded-t-md"
      >
        Profile
      </button>
      <button
        onClick={logout}
        className="w-full bg-gray-300 border-1 border-gray-600 px-4 py-2 rounded-b-md"
      >
        Logout
      </button>
    </div>
  );
}
