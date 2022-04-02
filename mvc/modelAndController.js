class ModelAndController {
    constructor() {
        this.numbers = [];
        this.inputNumber = null;
    }

    getNumbers() {
        return [...this.numbers];
    }

    getSum() {
        return this.numbers.reduce((a, b) => a + b, 0);
    }

    // controller - metodene som endrer modellen
    add() {
        let i = 0;
        while (i < this.numbers.length && this.numbers[i] < this.inputNumber) {
            i++;
        }
        this.numbers.splice(i, 0, this.inputNumber);
        this.inputNumber = null;
    }

    remove(number) {
        const index = this.numbers.findIndex(n => n === number);
        if (index === -1) return;
        this.numbers.splice(index, 1);
    }
}