console.log("SOLUTION 2")
class Queen{
    constructor(x= 0,y=0){
        if(x<0 || x>7 || y<0 || y>7) throw "Position is invalid"
        this.position = [x,y];
        console.log("Queen at position ",this.position)
    }
}

class QueenAttack{
    constructor(queen1, queen2){
    
        this.queen1 = queen1;
        this.queen2 = queen2;
    }

    canAttack(){
        if(this.queen1.position[0]==this.queen2.position[0]) return true;
   
        else if(this.queen1.position[1]==this.queen2.position[1]) return true;
   
        else if(this.queen1.position[0]+this.queen1.position[1]==this.queen2.position[0]+this.queen2.position[1])
            return true;
 
        else if(this.queen1.position[0]-this.queen1.position[1]==this.queen2.position[0]-this.queen2.position[1])
            return true;
        else
        return false;
    }

}


const q1 = new Queen(0,0);
const q2 = new Queen(4,5);

const queens = new QueenAttack(q1, q2);

console.log(queens.canAttack() ? "The Queens Can Attack" : "The Queens Cannot Attack");