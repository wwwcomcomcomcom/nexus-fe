import { PostEntity } from "../../entity/PostEntity";
import { DivProps } from "../../utils/typedef";

interface PostCardProps extends DivProps {
  post: PostEntity;
}

export default function PostCard(props: PostCardProps) {
  return (
    <div
      className={
        "p-5 rounded-lg border bg-projectCard text-projectCard-foreground shadow-sm " +
        props.className
      }
      data-v0-t="card"
    >
      <div className="space-y-1.5 flex flex-col md:flex-row md:items-center md:justify-between">
        <div
          style={{ maxWidth: "70%" }}
          className="flex items-center space-x-4"
        >
          <h2
            style={{ maxWidth: "70%" }}
            className="text-lg font-bold !mr-4 truncate"
          >
            {props.post.name}
          </h2>
        </div>
      </div>
      <div className="grid w-full gap-2 text-sm">
        <p className="truncate">{props.post.content}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Updated 2 days ago
        </p>
      </div>
    </div>
  );
}
