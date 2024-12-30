import { useNavigate } from "react-router-dom";
import { PostEntity } from "../../entity/PostEntity";
import { DivProps } from "../../utils/typedef";

interface PostCardProps extends DivProps {
  post: PostEntity;
}

export default function PostCard(props: PostCardProps) {
  const navigate = useNavigate();

  const truncatedContent =
    props.post.content.length > 300
      ? props.post.content.substring(0, 300) + "..."
      : props.post.content;

  return (
    <div
      className={
        "overflow-hidden cursor-pointer h-fit px-20 mt-4 pt-[3%] pb-[7%] rounded-3xl text-projectCard-foreground shadow-[0px_0.5px_15px_1px_rgb(0,0,0,0.05)] border border-neutral-100 bg-white z-0 hover:scale-105 transition justify-items-center " +
        props.className
      }
      onClick={() => navigate(`/post/${props.post.id}`)}
      data-v0-t="card"
    >
      <div className="space-y-1.5 flex flex-col py-3 text-start w-[100%]">
        <div style={{ maxWidth: "70%" }} className="flex space-x-4">
          <div className="text-2xl font-bold">
            <span className="ml-2">{props.post.user}</span>
            <span> | </span>
            <span className="mr-2">{props.post.name}</span>
          </div>
        </div>
        <div className="grid gap-2 text-[#757575] ">
          <p>{truncatedContent}</p>
        </div>
      </div>
    </div>
  );
}
