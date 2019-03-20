var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dice = /** @class */ (function () {
    function Dice(div) {
        this.div = div;
    }
    return Dice;
}());
var DiceValues;
(function (DiceValues) {
    DiceValues[DiceValues["<img src=\"./template/sml1.jpg\" alt=\"smile\">"] = 1] = "<img src=\"./template/sml1.jpg\" alt=\"smile\">";
    DiceValues[DiceValues["<img src=\"./template/sml2.jpg\" alt=\"smile\">"] = 2] = "<img src=\"./template/sml2.jpg\" alt=\"smile\">";
    DiceValues[DiceValues["<img src=\"./template/sml3.jpg\" alt=\"smile\">"] = 3] = "<img src=\"./template/sml3.jpg\" alt=\"smile\">";
    DiceValues[DiceValues["<img src=\"./template/sml4.jpg\" alt=\"smile\">"] = 4] = "<img src=\"./template/sml4.jpg\" alt=\"smile\">";
    DiceValues[DiceValues["<img src=\"./template/sml5.jpg\" alt=\"smile\">"] = 5] = "<img src=\"./template/sml5.jpg\" alt=\"smile\">";
    DiceValues[DiceValues["<img src=\"./template/sml6.jpg\" alt=\"smile\">"] = 6] = "<img src=\"./template/sml6.jpg\" alt=\"smile\">";
})(DiceValues || (DiceValues = {}));
var DiceRoller = /** @class */ (function (_super) {
    __extends(DiceRoller, _super);
    // static DiceValues = DiceValues;
    function DiceRoller(div) {
        var _this = _super.call(this, div) || this;
        div.style.cssText = "border: 5px solid black; border-radius: 20px; display: inline-block; background-color: yellow; text-align: center;font-size: 25px; font-weight: bold; height: 100px;  width: 100px; margin: 60px 12px 12px 12px";
        return _this;
    }
    DiceRoller.prototype.rolleDice = function (diceValue) {
        // (<HTMLElement>this.div).textContent = DiceValues[diceValue];
        this.div.innerHTML += DiceValues[diceValue];
        //let mr: string = "margin: " + `${diceValue*20}` + ";";
        //(<HTMLElement>this.div).style.cssText = mr;
        return true;
    };
    return DiceRoller;
}(Dice));
var DiceRollerButton = /** @class */ (function () {
    function DiceRollerButton(button) {
        this.button = button;
        this.button.style.cssText = "display: inline-block; font-size: 25px; background-color: red; width: 80px; height: 70%;";
        this.button.textContent = "Roll!";
        document.getElementById('bbnn').appendChild(this.button);
    }
    DiceRollerButton.prototype.roll = function (diceCollection) {
        diceCollection.forEach(function (item) {
            item.div.innerHTML = DiceValues[getRandomIntInclusive(1, 6)];
        });
    };
    return DiceRollerButton;
}());
var Elements = [];
var diceCollection = [];
for (var index = 0; index < 4; index++) {
    Elements.push({
        'div': document.createElement('div')
    });
}
Elements.map(function (elem, index) {
    var cube = new DiceRoller(elem.div);
    // let button: Element = document.createElement('button');
    // document.body.appendChild(elem.div);
    var tableElem = document.getElementById('flx');
    tableElem.appendChild(elem.div);
    diceCollection.push(cube);
});
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var diceRollerButton = new DiceRollerButton(document.createElement('button'));
diceRollerButton.button.onclick = function (event) {
    diceRollerButton.roll(diceCollection);
};
