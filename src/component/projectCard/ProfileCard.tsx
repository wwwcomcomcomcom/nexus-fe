import { ProfileEntity } from "../../entity/ProfileEntity";
import { DivProps } from "../../utils/typedef";

interface ProfileCardProps extends DivProps {
  profile: ProfileEntity;
}

export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="flex w-fit h-16 relative rounded-full shadow-lg">
      <img
        className="flex rounded-full h-full w-auto cursor-pointer"
        onClick={() => (window.location.href = `${props.profile.url}`)}
        src={props.profile.imgUrl}
        alt="profile"
      ></img>
      <div className="flex justify-between pr-5 pl-2 gap-2 items-center">
        <div className="flex font-semibold ">{props.profile.name}</div>
        <div className="flex ">{props.profile.role}</div>
      </div>
    </div>
  );
}
