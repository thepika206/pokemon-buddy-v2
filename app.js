console.log('js working')

//constants===============
class Pokemon {
  constructor(id, name, hp, damage) {
    this.id = id
    this.name = name
    this.hp = hp
    this.damage = damage
  }

}

//game variables===============
const party = []


//cached element refs=====================

//event listeners=========================

//functions===============================

let pokemon1 = new Pokemon(1, 'pikachu', 60, 0)
party.push(pokemon1)
console.log(party)

function renderParty(party){
  party.forEach((member) => {
    console.log(`${member.name} has ${member.hp} starting hp and ${member.damage} damage`)
  })
}

renderParty(party)