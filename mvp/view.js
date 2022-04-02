class View {
    constructor(presenter) {
        this.presenter = presenter;
    }

    update(state) {
        document.getElementById('app').innerHTML = /*html*/`
            <h3>Tøffe tall</h3>
            Summen er ${state.sum}
            <ul>
                ${state.numbers.map(n =>/*html*/`
                    <li>
                        ${n} 
                        <button number="${n}">x</button>
                    </li>
                `).join('')}
            </ul>
            <input 
                id="numberInput" 
                type="number" 
                value="${state.inputNumber || ''}"
                />
            <button>Legg til tall</button>        
        `;
        const myInput = document.getElementById('numberInput');
        myInput.oninput = this.inputChangeValue.bind(this);
        const buttons = Array.from(document.getElementsByTagName('button'));
        const addBtn = buttons.pop();
        addBtn.onclick = this.addButtonClick.bind(this);
        for(let btn of buttons){
            btn.onclick = this.removeButtonClick.bind(this);
        }
    }

    inputChangeValue(event) {
        const input = event.srcElement;
        this.presenter.updateInputNumber(input.valueAsNumber);
    }

    addButtonClick() {
        this.presenter.addNumber();
    }

    removeButtonClick(event){     
        const btn = event.srcElement;
        const number = btn.getAttribute('number');   
        this.presenter.removeNumber(number);
    }
}