class Presenter {
    constructor() {
        this.view = new View(this);
        this.model = new Model(this);
    }

    update() {
        const state = {
            numbers: this.model.getNumbers(),
            sum: this.model.getSum(),
            inputNumber: this.number
        };
        this.view.update(state);
    }

    addNumber() {
        this.model.add(this.number);
        this.number = null;
        this.update();
    }

    removeNumber(number) {
        this.model.remove(number);
        this.update();
    }

    updateInputNumber(number) {
        this.number = number;
    }
}