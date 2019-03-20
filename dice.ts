class Dice {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
}

enum DiceValues {
    '<img src="./template/sml1.jpg" alt="smile">' = 1,
    '<img src="./template/sml2.jpg" alt="smile">',
    '<img src="./template/sml3.jpg" alt="smile">',
    '<img src="./template/sml4.jpg" alt="smile">',
    '<img src="./template/sml5.jpg" alt="smile">',
    '<img src="./template/sml6.jpg" alt="smile">'
 }

class DiceRoller extends Dice {
 // static DiceValues = DiceValues;
    constructor(div: Element) {
        super(div);
        (<HTMLElement>div).style.cssText = "border: 5px solid black; border-radius: 20px; display: inline-block; background-color: yellow; text-align: center;font-size: 25px; font-weight: bold; height: 100px;  width: 100px; margin: 60px 12px 12px 12px"; 
    }
    rolleDice(diceValue: number): boolean {
       // (<HTMLElement>this.div).textContent = DiceValues[diceValue];
      (<HTMLElement>this.div).innerHTML += DiceValues[diceValue];
      //let mr: string = "margin: " + `${diceValue*20}` + ";";
      //(<HTMLElement>this.div).style.cssText = mr;
        return true;
    }
}

class DiceRollerButton {
  button: Element;
  constructor(button: Element) {
    this.button = button;
    (<HTMLElement>this.button).style.cssText = "display: inline-block; font-size: 25px; background-color: red; width: 80px; height: 70%;";
    this.button.textContent = "Roll!";
    document.getElementById('bbnn').appendChild(this.button);

  }

  roll(diceCollection: Array<DiceRoller>) {
    diceCollection.forEach((item) => {
      item.div.innerHTML = DiceValues[getRandomIntInclusive(1, 6)];
    });
  }
}


interface DiceTypes {
    div: Element;
}
let Elements: Array<DiceTypes> = [];

let diceCollection: Array<DiceRoller> = [];

for (let index: number = 0; index < 4; index++) {
    Elements.push({
        'div': document.createElement('div'),
    });
}

Elements.map((elem, index) => {
    let cube = new DiceRoller(elem.div);
    // let button: Element = document.createElement('button');
   // document.body.appendChild(elem.div);
    var tableElem = document.getElementById('flx');
    tableElem.appendChild(elem.div); 
       diceCollection.push(cube);
});
let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let diceRollerButton = new DiceRollerButton(document.createElement('button'));

(diceRollerButton.button as HTMLElement).onclick = (event): void => {
  diceRollerButton.roll(diceCollection);
}