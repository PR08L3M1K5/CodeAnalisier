export  class CandidateExercise {
  id: number;
  name: string;
  description: string;
  candidateCode: string;
  sourceCode:string;
  constructor(id: number, name: string, description: string, candidateCode: string,sourceCode:string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.candidateCode = candidateCode;
    this.sourceCode = sourceCode;
  }

}
