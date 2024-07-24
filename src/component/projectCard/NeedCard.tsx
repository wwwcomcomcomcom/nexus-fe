import { NeedEntity } from "../../entity/NeedEntity";
import { DivProps } from "../../utils/typedef";

interface NeedCardProps extends DivProps {
  profile: NeedEntity;
}

export default function NeedCard(props: NeedCardProps) {
  return <div></div>;
}
