import { useNavigate } from "react-router-dom";
import { PostEntity } from "../../entity/PostEntity";
import { DivProps } from "../../utils/typedef";

interface PostCardProps extends DivProps {
  post: PostEntity;
}

export default function PostCard(props: PostCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className={
        "cursor-pointer px-10 py-12 rounded-2xl text-projectCard-foreground shadow-[0_10px_50px_0px_rgba(0,0,0,0.05)] border border-neutral-100 bg-white z-0 hover:scale-105 transition justify-items-center " +
        props.className
      }
      onClick={() => navigate(`/post/${props.post.id}`)}
      data-v0-t="card"
    >
      <div className="space-y-1.5 flex flex-col md:flex-row md:items-center md:justify-between py-3">
        <div
          style={{ maxWidth: "70%" }}
          className="flex items-center space-x-4"
        >
          <h2 style={{ maxWidth: "70%" }} className="text-xl font-bold !mr-4">
            {props.post.name}
          </h2>
        </div>
      </div>
      <div className="grid gap-2 text-base ">
        <p className=" truncate ">{props.post.content}</p>
        {/* <p className="text-sm text-gray-500 dark:text-gray-400">
          Updated 2 days ago
        </p> */}
      </div>
    </div>
  );
}
