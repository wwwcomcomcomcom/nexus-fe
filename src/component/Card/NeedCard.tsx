import { NeedEntity } from "../../entity/NeedEntity";
import { DivProps } from "../../utils/typedef";
import JavascriptBadge from "../badge/JavascriptBadge";
import ReactBadge from "../badge/ReactBadge";
import FigmaBadge from "../badge/FigmaBadge";
import FlutterBadge from "../badge/FlutterBadge";
import JavaBadge from "../badge/JavaBadge";
import KotlinBadge from "../badge/KotlinBadge";
import SpringBadge from "../badge/SpringBadge";
import TypescriptBadge from "../badge/TypescriptBadge";

interface NeedCardProps extends DivProps {
  need: NeedEntity;
}

export default function NeedCard(props: NeedCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-md w-[70%] p-5">
      <div className="w-fit grid gap-2">
        <div className="grid grid-flow-col justify-start w-fit">
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
        <div className="">
          <div className="text-sm pb-2">지원 자격</div>
          <div className="flex flex-wrap gap-2 ">
            {props.need.stack.map((stack) => {
              switch (stack) {
                case "Figma":
                  return <FigmaBadge className=" h-8 w-auto" />;
                case "Flutter":
                  return <FlutterBadge className=" h-8 w-auto" />;
                case "Java":
                  return <JavaBadge className=" h-8 w-auto" />;
                case "Javascript":
                  return <JavascriptBadge className=" h-8 w-auto" />;
                case "Kotlin":
                  return <KotlinBadge className=" h-8 w-auto" />;
                case "React":
                  return <ReactBadge className=" h-8 w-auto" />;
                case "Spring":
                  return <SpringBadge className=" h-8 w-auto" />;
                case "Typescript":
                  return <TypescriptBadge className=" h-8 w-auto" />;
                default:
                  return "ERR";
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
