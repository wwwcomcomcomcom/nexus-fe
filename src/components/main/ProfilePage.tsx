import { useUpdatedUserStore } from "../../shared/api";

export default function ProfilePage() {
  const {isLogin,user} = useUpdatedUserStore();
  if(isLogin() === false) return <h1>You are not logged in</h1>;
  return <div className="flex flex-col items-center space-y-4">
    <div className="flex items-center space-x-4">
      <img
        className="w-24 h-24 rounded-full"
        src={user.profileImageUrl as string}
        alt="profile"
      />
      <div>
        <h1 className="text-2xl font-bold">{user.login as string}</h1>
        <p className="text-gray-500"></p>
      </div>
    </div>
  </div>
}