// this is here because we have no need to call this every time we call the function
const container = document.getElementById('container')

function setCounter(value) {
    //creating variables
    const temp = {
        increment: function () {
            this.count = this.count + 1;
            output.innerText = `count: ${this.count}`
        },
        decrement: function () {
            this.count = this.count - 1;
            output.innerText = `count: ${this.count}` 
        },
        count: value || 0
    }
    const counter = document.createElement('div')
    const minusButton = document.createElement('input')
    const plusButton = document.createElement('input')
    const output = document.createElement('span')

    //setting params
    minusButton.setAttribute('value', '-')
    plusButton.setAttribute('value', '+')
    minusButton.setAttribute('type', 'button')
    plusButton.setAttribute('type', 'button')

    //appending it into html
    output.innerText = `count: ${temp.count}`
    counter.append(minusButton);
    counter.append(plusButton);
    counter.append(output)
    container.append(counter);

    //adding actions to buttons
    minusButton.addEventListener('click', () => { temp.decrement()})
    plusButton.addEventListener('click', () => { temp.increment()})

    return temp
}

const counter_1 = setCounter(15)
const counter_2 = setCounter(-6)
const counter_3 = setCounter(11)

console.log(counter_1.count)
console.log(counter_2.count)
console.log(counter_3.count)

counter_1.decrement()
console.log(counter_1.count)
counter_3.increment()
console.log(counter_3.count)

