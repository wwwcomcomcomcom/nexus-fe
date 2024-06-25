import { findUserData, useTokenStore, useUserStore } from "../../shared/userStore";

export default function ProfilePage() {
  const {isLogin,accessToken} = useTokenStore((state) => state);
  const user = useUserStore((state) => state.user);
  if(isLogin()){
    findUserData(user,accessToken!).then((newUser) => {
      useUserStore.setState({user: newUser});
    });
  }
  return <div className="flex flex-col items-center space-y-4">
    <div className="flex items-center space-x-4">
      <img
        className="w-24 h-24 rounded-full"
        src={user.avatar_url as string}
        alt="profile"
      />
      <div>
        <h1 className="text-2xl font-bold">{user.login as string}</h1>
        <p className="text-gray-500"></p>
      </div>
    </div>
  </div>
}