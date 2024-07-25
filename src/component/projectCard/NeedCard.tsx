import { useState } from "react";
import { NeedEntity } from "../../entity/NeedEntity";
import { DivProps } from "../../utils/typedef";
import JavascriptBadge from "../badge/JavascriptBadge";
import ReactBadge from "../badge/ReactBadge";

interface NeedCardProps extends DivProps {
  need: NeedEntity;
}

export default function NeedCard(props: NeedCardProps) {
  const [needs, setNeeds] = useState<NeedEntity[]>([]);

  return (
    <div className="bg-white rounded-3xl shadow-md w-fit p-5 pr-16">
      <div className="grid gap-2">
        <div className="grid grid-flow-col justify-start">
          <div className="flex text-sm">모집 분야</div>
          <div className="flex font-semibold pl-2 text-sm">
            {props.need.role}
          </div>
        </div>
        <div className="grid grid-flow-col justify-start">
          <div className="flex text-sm">모집 인원</div>
          <div className="flex font-semibold pl-2 text-sm">
            {props.need.number}인
          </div>
        </div>
        <div>
          <div className="text-sm">지원 자격</div>
          <div className="flex">
            {/* {needs.map((need) => (
              <NeedCard need={need} />
            ))} */}
            <JavascriptBadge />
            <ReactBadge />
          </div>
        </div>
      </div>
    </div>
  );
}
