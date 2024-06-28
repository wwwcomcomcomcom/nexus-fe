import { Status } from "../components/card/projectStatus.ts";
import {ProjectEntity} from "../entity/ProjectEntity.ts";
// import axios from 'axios';


export function getAllProjectEntity(numberOfProjects:number=10): ProjectEntity[] {
  const result: ProjectEntity[] = [];
  const allWords = getRandomWords(numberOfProjects*13);
  for (let i = 0; i < numberOfProjects; i++) {
    result.push(generateProjectEntity(allWords.slice(i*13)));
  }
  return result;
}

export function generateProjectEntity(words?:string[]): ProjectEntity {
  if(!words){
    words = getRandomWords(13);
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

function getRandomWords(wordsLength: number): string[] {
  const words:string[] = [];
  for(let i = 0; i < wordsLength; i++){
    words.push("word");
  }
  return words;
}

function randomStatus(): Status {
  return Object.values(Status)[Math.floor(Math.random() * Object.values(Status).length)];
}

