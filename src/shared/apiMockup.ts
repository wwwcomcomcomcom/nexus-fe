import { State } from "../component/projectCard/projectStatus.ts";
import { ProjectEntity } from "../entity/ProjectEntity.ts";
import { ProfileEntity } from "../entity/ProfileEntity";
import { PostEntity } from "../entity/PostEntity";

export function getAllProjectEntity(numberOfProjects: number = 10): ProjectEntity[] {
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
    owner: 1,
    members: [],
    wanted: [],
  };
  return projectEntity;
}

export function generateProfileEntity(): ProfileEntity {
  return {
    id: Math.floor(Math.random() * 1000),
    name: "Test",
    githubUrl: "https://github.com/976520",
    profileImageUrl: "https://avatars.githubusercontent.com/u/976520?v=4",
    role: "Developer",
  };
}

export function getAllPostEntity(numberOfPosts: number = 10): PostEntity[] {
  const result: PostEntity[] = [];
  for (let i = 0; i < numberOfPosts; i++) {
    result.push({
      id: randomId(),
      name: "Sample Post " + i,
      content: "This is a sample post content " + i,
      user: "User " + i,
    });
  }
  return result;
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
  return Object.values(State)[Math.floor(Math.random() * Object.values(State).length)];
}
