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
            {props.need.stack.map((stack) => {
              switch (stack) {
                case "Figma":
                  return <FigmaBadge />;
                case "Flutter":
                  return <FlutterBadge />;
                case "Java":
                  return <JavaBadge />;
                case "Javascript":
                  return <JavascriptBadge />;
                case "Kotlin":
                  return <KotlinBadge />;
                case "React":
                  return <ReactBadge />;
                case "Spring":
                  return <SpringBadge />;
                case "Typescript":
                  return <TypescriptBadge />;
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
