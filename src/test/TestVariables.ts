import { Status } from "../components/card/projectStatus.ts";
import {ProjectEntity} from "../entity/ProjectEntity.ts";
import axios from 'axios';


export async function getAllProjectEntity(numberOfProjects:number=10): Promise<ProjectEntity[]> {
  const result: ProjectEntity[] = [];
  const requests = [];
  const allWords = await getRandomWords(numberOfProjects*13);
  for (let i = 0; i < numberOfProjects; i++) {
    requests.push(generateProjectEntity(allWords.slice(i*13)).then((project) => result.push(project)));
  }
  await Promise.all(requests);
  return result;
}

export async function generateProjectEntity(words?:string[]): Promise<ProjectEntity> {
  if (!words || words.length < 13) {
    words = await getRandomWords(13);
  }
  const projectEntity: ProjectEntity = {
    id: randomId(),
    name: words[0],
    description: words.slice(3).join(' '),
    status: randomStatus(),
    githubUrl: `https://github.com/${words[1]}/${words[2]}`,
  };
  return projectEntity;
}

function randomId(): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

async function getRandomWords(wordsLength: number): Promise<string[]> {
  const words = await axios.get(`https://random-word-api.herokuapp.com/word?number=${wordsLength}&length=7`).then(res => res.data);
  return words;
}

function randomStatus(): Status {
  return Object.values(Status)[Math.floor(Math.random() * Object.values(Status).length)];
}

