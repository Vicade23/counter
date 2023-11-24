const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const numbers = document.getElementById('number');

class Counnter {
    constructor() {
        this.index = 0;
        numbers.innerHTML = this.index;
        numbers.style.color = 'black';
    }

    dec() {

    }

    increases() {
        increase.addEventListener('click', () => {
            this.index = this.index+1
            numbers.innerHTML = this.index;
            
            if (numbers.innerHTML === '0') {
                numbers.style.color = 'black';
            }
            else {
                numbers.style.color = 'green';
                decrease.style.border = 'black solid';
                decrease.style.color = 'grey';
            }
        });
    }

    decreases() {
        decrease.addEventListener('click', () => {
            this.index = this.index-1
            
            if (numbers.innerHTML === '0') {
                numbers.style.color = 'black';
                decrease.style.border = 'grey solid';
                decrease.style.color = 'grey';
                this.index = 0;
                numbers.innerHTML = this.index;

            }
            else {
                numbers.innerHTML = this.index;
                numbers.style.color = 'green';
            }
            if (numbers.innerHTML === '0') {
                numbers.style.color = 'black';
            }

        });
    }

    resets() {
        reset.addEventListener('click', () => {
            this.index = 0
            numbers.innerHTML = this.index;
            
            if (numbers.innerHTML === '0') {
                numbers.style.color = 'black'
            }
            else {
                numbers.style.color = 'green'
            }
        });
    }
}

const myCounts = new Counnter();
myCounts.increases();
myCounts.decreases();
myCounts.resets();