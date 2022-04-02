class Model {
    constructor() {
        this.numbers = [];
    }

    getNumbers() {
        return [...this.numbers];
    }

    getSum() {
        return this.numbers.reduce((a, b) => a + b, 0);
    }

    add(number) {
        let i = 0;
        while (i < this.numbers.length && this.numbers[i] < number) {
            i++;
        }
        this.numbers.splice(i, 0, number);
    }

    remove(number) {
        const index = this.numbers.findIndex(n => n === number);
        if (index === -1) return;
        this.numbers.splice(index, 1);
    }
}