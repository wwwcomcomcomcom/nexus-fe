import { ProfileEntity } from "../../entity/ProfileEntity";
import { DivProps } from "../../utils/typedef";

interface ProfileCardProps extends DivProps {
  profile: ProfileEntity;
}

export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="flex w-[13.7rem] h-16 relative rounded-full bg-white shadow-md">
      <img
        className="flex rounded-full h-full w-auto cursor-pointer"
        onClick={() => (window.location.href = `${props.profile.url}`)}
        src={props.profile.imgUrl}
        alt="profile"
      ></img>
      <div className="flex justify-between w-full pr-5 pl-3 gap-1 items-center">
        <div className="flex font-semibold ">{props.profile.name}</div>
        <div className="flex ">{props.profile.role}</div>
      </div>
    </div>
  );
}
