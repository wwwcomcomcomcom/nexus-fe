import { useNavigate } from "react-router-dom";
import { ProfileEntity } from "../../entity/ProfileEntity";
import { DivProps } from "../../utils/typedef";

interface ProfileCardProps extends DivProps {
  profile: ProfileEntity;
}

export default function ProfileCard(props: ProfileCardProps) {
  const navigate = useNavigate();

  return <div></div>;
}
