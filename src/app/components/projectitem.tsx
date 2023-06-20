import Image from "next/image";

interface ProjectItemProps {
  backgroundImg: string;
  tag1: string;
  tag2: string;
  url: string;
  width?: number;
}

export default function projectitem({
  backgroundImg,
  tag1,
  tag2,
  url,
  width = 200,
}: ProjectItemProps) {
  return (
    <a href={url}>
      <div className="bg-black aspect-square flex flex-col items-center justify-center rounded-xl">
        <Image
          src={backgroundImg}
          alt="alt"
          width={width}
          height={200}
          className="my-auto pt-12"
        />
        <p className="mt-0 mb-6 text-sm justify-self-end text-center">
          <span className="text-[#279AF1]">⌘</span>
          {tag1} <span className="text-[#279AF1]">⌘</span>
          {tag2}
        </p>
      </div>
    </a>
  );
}
