function updateView(){
    document.getElementById('app').innerHTML = /*html*/`
        <h3>Tøffe tall</h3>
        Summen er ${model.getSum()}
        <ul>
            ${model.getNumbers().map(n=>/*html*/`
                <li>
                    ${n} 
                    <button 
                        onclick="model.remove(${n}); updateView()"
                        >
                        x
                    </button>
                </li>
            `).join('')}
        </ul>
        <input 
            type="number" 
            value="${model.inputNumber || ''}"
            oninput="model.inputNumber = this.valueAsNumber"
            />
        <button onclick="model.add(); updateView();">Legg til tall</button>        
    `;
}