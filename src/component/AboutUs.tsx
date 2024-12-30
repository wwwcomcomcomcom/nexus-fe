import React from "react";

interface TeamMember {
  name: string;
  imgSrc: string;
  labels: string[];
  github: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "김담율",
    imgSrc: "https://avatars.githubusercontent.com/u/162972723?v=4",
    labels: ["APP"],
    github: "https://github.com/DAMNyul",
  },
  {
    name: "이서희",
    imgSrc: "https://avatars.githubusercontent.com/u/156983141?v=4",
    labels: ["Backend"],
    github: "https://github.com/se0hui",
  },
  {
    name: "이세민",
    imgSrc: "https://avatars.githubusercontent.com/u/68013923?v=4",
    labels: ["Frontend", "Backend", "APP"],
    github: "https://github.com/wwwcomcomcomcom",
  },
  {
    name: "이영서",
    imgSrc: "https://avatars.githubusercontent.com/u/162972645?v=4",
    labels: ["APP"],
    github: "https://github.com/ysl0331",
  },
  {
    name: "정효주",
    imgSrc: "https://avatars.githubusercontent.com/u/164720957?v=4",
    labels: ["Frontend", "Design"],
    github: "https://github.com/h-0y28",
  },
  {
    name: "송재욱",
    imgSrc: "https://avatars.githubusercontent.com/u/123460320?v=4",
    labels: ["Frontend", "Design", "AI"],
    github: "https://github.com/976520",
  },
];

const labelColors: { [key: string]: string } = {
  Frontend: "#FFF5DB",
  Backend: "#DBF2FF",
  APP: "#E6FFE6",
  Design: "#FFDBDB",
  AI: "#F5E6FF",
};

const AboutUs: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center mt-16">
      <div className="w-3/4 pl-10">
        <h1 className="font-bold text-2xl">
          About us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-6 w-6 inline mb-1"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </h1>
        <p className="text-[#757575] my-1">NEXUS를 만든 사람들이에요</p>
      </div>
      <div className="grid grid-cols-3 py-8 gap-6 max-w-7xl w-5/6">
        {teamMembers.map((member) => (
          <TeamMemberComponent key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMemberComponent: React.FC<TeamMemberProps> = ({ member }) => {
  const handleProfileClick = () => {
    window.location.href = member.github;
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={member.imgSrc}
        className="rounded-full w-24 cursor-pointer"
        onClick={handleProfileClick}
        alt={`${member.name}의 프로필`}
      />
      <h2 className="font-semibold pb-5 pt-2">{member.name}</h2>
      <div className="flex flex-col gap-2 w-1/4 min-w-20">
        {member.labels.map((label) => (
          <Label key={label} text={label} />
        ))}
      </div>
    </div>
  );
};

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  const backgroundColor = labelColors[text] || "#FFFFFF";

  return (
    <label
      className="w-full rounded-full text-center"
      style={{ backgroundColor }}
    >
      {text}
    </label>
  );
};

export default AboutUs;
