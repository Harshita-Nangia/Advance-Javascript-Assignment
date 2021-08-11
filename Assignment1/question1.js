const battles=require('./battles.json')

console.log("SOLUTION 1")

// declaration of all the variables
var result={
    most_active:{
        attacker_king:"",
        defender_king:"",
        region:"",
        name:""
    },

    attacker_outcome:{
        win: 0, // total win
        loss:0 // total loss
    },

    battle_type: [], // unique battle types

    defender_size:{
        average: 0,
        min:99999,
        max:-1
        }
    }

var attackers = {};
var defenders = {};
var regions = {};
var names = {};
var totalDefenderSize = 0;

// Function to calculate all the max values
const getMax= data=>{
    let max=0;
    let value="";
    for (let key in data){
        if(max<data[key]){
            max=data[key]
            value=key
        }
    } 
    if(max==1) return "All occured once"
    return value
}

// Function to access and analyse each field
const battlesData=(battles=>{
    

    battles.forEach(battle => {
        attackers[battle["attacker_king"]] 
            = attackers[battle["attacker_king"]] 
                ? attackers[battle["attacker_king"]] + 1
                : 1;

        defenders[battle["defender_king"]] 
            = defenders[battle["defender_king"]] 
                ? defenders[battle["defender_king"]] + 1
                : 1;

        regions[battle["region"]] 
            = regions[battle["region"]] 
                ? regions[battle["region"]] + 1
                : 1;

        names[battle["name"]] 
            = names[battle["name"]] 
                ? names[battle["name"]] + 1
                : 1;

        if(battle["attacker_outcome"]==="win")
        result.attacker_outcome.win+=1

        if(battle["attacker_outcome"]==="loss")
        result.attacker_outcome.loss+=1

        if(battle["defender_size"]){
            totalDefenderSize+=battle["defender_size"];
            if(result.defender_size.min > battle["defender_size"]){
                result.defender_size.min = battle["defender_size"];
            }
            else if(result.defender_size.max < battle["defender_size"]){
                result.defender_size.max = battle["defender_size"];
            }

        }


        if(!result.battle_type.includes(battle["battle_type"])){
            result.battle_type.push(battle["battle_type"])
        }

    });
    result.most_active.attacker_king = getMax(attackers);
    result.most_active.defender_king = getMax(defenders);
    result.most_active.region = getMax(regions);
    result.most_active.name = getMax(names);

    result.defender_size.average=(totalDefenderSize/battles.length).toFixed(3)

  
});


battlesData(battles)

console.log(result)


