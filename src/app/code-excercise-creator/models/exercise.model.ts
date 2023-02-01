export  class Exercise {
  name: string;
  description: string;
  sourceCode:string
  tests:TestCase[] = [];
  validators:ValidatorRule[]=[]
  constructor( ) {
    this.name = "";
    this.description = "";
    this.sourceCode = "";
  }

}
export class TestCase{
  name:string;
  input:string;
  output:string;
  constructor(name:string,input:string,output:string) {
    this.name = name;
    this.input = input;
    this.output = output;
  }
}

export class ValidatorRule
{
  name:string;
  param:string;
  constructor(name:string,param:string) {
    this.name = name;
    this.param = param;
  }
}


