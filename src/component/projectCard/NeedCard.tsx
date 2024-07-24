import { NeedEntity } from "../../entity/NeedEntity";
import { DivProps } from "../../utils/typedef";

interface NeedCardProps extends DivProps {
  need: NeedEntity;
}

export default function NeedCard(props: NeedCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-md w-fit p-6 ">
      <div className="grid gap-1">
        <div className="grid grid-flow-col justify-start">
          <div className="flex">모집 분야</div>
          <div className="flex font-semibold pl-2">{props.need.role}</div>
        </div>
        <div className="grid grid-flow-col justify-start">
          <div className="flex">모집 인원</div>
          <div className="flex font-semibold pl-2">{props.need.number}인</div>
        </div>
        <div>
          <div>지원 자격</div>
          // 스택 벳지 넣는 곳<div></div>
        </div>
      </div>
    </div>
  );
}
