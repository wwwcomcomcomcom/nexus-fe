import { State } from "../component/projectCard/projectStatus.ts";
import { NeedEntity } from "../entity/NeedEntity.ts";
import { PostEntity } from "../entity/PostEntity.ts";
import { ProfileEntity } from "../entity/ProfileEntity.ts";
import { ProjectEntity } from "../entity/ProjectEntity.ts";
// import axios from 'axios';

export function getAllProjectEntity(
  numberOfProjects: number = 10
): ProjectEntity[] {
  const result: ProjectEntity[] = [];
  const allWords = getRandomWords(numberOfProjects * 13);
  for (let i = 0; i < numberOfProjects; i++) {
    result.push(generateProjectEntity(allWords.slice(i * 13)));
  }
  return result;
}

export function generateProjectEntity(words?: string[]): ProjectEntity {
  if (!words) {
    words = getRandomWords(13);
  }
  const projectEntity: ProjectEntity = {
    id: randomId(),
    title: words[0],
    description: words.slice(3).join(" "),
    state: randomStatus(),
    githubUrl: `https://github.com/${words[1]}/${words[2]}`,
  };
  return projectEntity;
}

// 프로젝트 샘플
export const getProjectById = (id: string): ProjectEntity | null => {
  const project: ProjectEntity | null = {
    id,
    title: "Sample Project",
    description: "This is a sample project description.",
    state: State.Active,
    githubUrl: "https://github.com/sample",
  };
  return project;
};

// 여기 부분 확인
export function getAllProfileEntity(
  numberOfProfiles: number = 10
): ProfileEntity[] {
  const result: ProfileEntity[] = [];
  const allWords = getRandomWords(numberOfProfiles * 13);
  for (let i = 0; i < numberOfProfiles; i++) {
    result.push(generateProfileEntity(allWords.slice(i * 13)));
  }
  return result;
}

// 여기 부분 확인
export function generateProfileEntity(words?: string[]): ProfileEntity {
  if (!words) {
    words = getRandomWords(13);
  }
  const profileEntity: ProfileEntity = {
    name: "정효주",
    url: "https://github.com/h-0y28",
    imgUrl: "https://avatars.githubusercontent.com/u/164720957?v=4",
    role: "FrontEnd",
    id: 1,
  };
  return profileEntity;
}

//여기 부분 확인
export function getAllNededEntity(numberOfNeeds: number = 10): NeedEntity[] {
  const result: NeedEntity[] = [];
  const allWords = getRandomWords(numberOfNeeds * 13);
  for (let i = 0; i < numberOfNeeds; i++) {
    result.push(generateNeedEntity(allWords.slice(i * 13)));
  }
  return result;
}

// 여기 부분 확인
export function generateNeedEntity(words?: string[]): NeedEntity {
  if (!words) {
    words = getRandomWords(13);
  }
  const NeedEntity: NeedEntity = {
    role: "FrontEnd",
    number: 2,
    stack: ["Javascript", "React", "Java", "Figma"],
    id: 1,
  };
  return NeedEntity;
}

export function getAllPostEntity(numberOfPosts: number = 10): PostEntity[] {
  const result: PostEntity[] = [];
  const allWords = getRandomWords(numberOfPosts * 13);
  for (let i = 0; i < numberOfPosts; i++) {
    result.push(generatePostEntity(allWords.slice(i * 13)));
  }
  return result;
}

export function generatePostEntity(words?: string[]): PostEntity {
  if (!words) {
    words = getRandomWords(13);
  }
  const postEntity: PostEntity = {
    id: randomId(),
    name: words[0],
    content: words.slice(3).join(" "),
    user: words[0],
  };
  return postEntity;
}

function randomId(): string {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

function getRandomWords(wordsLength: number): string[] {
  const words: string[] = [];
  for (let i = 0; i < wordsLength; i++) {
    words.push("word");
  }
  return words;
}

function randomStatus(): State {
  return Object.values(State)[
    Math.floor(Math.random() * Object.values(State).length)
  ];
}
