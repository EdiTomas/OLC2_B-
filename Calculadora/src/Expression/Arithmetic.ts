import { Expression } from "../Abstract/Expression";

export enum ArithmeticOption{
    PLUS,
    MINUS,
    TIMES,
    DIV
}

export class Arithmetic extends Expression{

    constructor(private left: Expression, private right: Expression, private type : ArithmeticOption, line: number, column: number){
        super(line,column);
    }

    public execute() : any{
        const leftValue = this.left.execute();
        const rightValue = this.right.execute();

        if(this.type == ArithmeticOption.PLUS){
            return leftValue + rightValue;
        }
        else if(this.type == ArithmeticOption.MINUS){
            return leftValue - rightValue;
        }
        else if(this.type == ArithmeticOption.TIMES){
            return leftValue * rightValue;
        }
        else{
            //TODO validar division entre 0
            return leftValue / rightValue;
        }
    }
}