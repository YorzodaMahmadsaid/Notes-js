function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if(job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('designer')('Said');

//////////////////////////////////////////////////////////////////////////////////////////////////////

let names: Array<string> = ['Said', 'Navruz', 'Jonon'];
console.log(names);

let names: string[] = ['Said', 'Navruz', 'Firuz'];
console.log(names);

///////////////////////////////////////////////////////////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));

///////////////////////////////////////////////////////////////////////////////////////////////////////

async function getData(){
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await result.json();
    console.log(data);
}

getData().then();

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Iphone {
    constructor(memory, color, price) {
        this.memory = memory;
        this.color = color;
        this.price = price;
    }

    whois() {
        console.log('Память: ' + this.memory + 'Gb. Цветь ' + this.color + '. Цена:' + this.price + ' Сомон');
    }
}

Iphone_object_1 = new Iphone(64, 'Black', 12000);
Iphone_object_2 = new Iphone(112, 'White', 14000);
Iphone_object_3 = new Iphone(256, 'Gold', 15000);
Iphone_object_4 = new Iphone(512, 'Red', 16000);

Iphone_object_1.whois(); //Память: 64Gb. Цветь Black. Цена:12000 Сомон
Iphone_object_2.whois(); //Память: 112Gb. Цветь White. Цена:14000 Сомон
Iphone_object_3.whois(); //Память: 256Gb. Цветь Gold. Цена:15000 Сомон
Iphone_object_4.whois(); //Память: 512Gb. Цветь Red. Цена:16000 Сомон

///////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react';

export default function App() {

    const [textButton, setTextButton] = useState('Click me!');
    return (
        <div>
            <button onClick={() => {
                    setTextButton('You are click to me now!');
                }}>{textButton}
            </button>
        </div>
    )
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

export default function Greet(props) {
    console.log(props); // name: "Mahmadsaid", job: "Web Developer", city: "Dushanbe"
    return (
        <div>
            <h3>My name is {props.name}</h3>
            <h3>I am {props.job}</h3>
            <h3>I live in city of {props.city}</h3>
        </div>
    )
}

ReactDOM.render(
    <Greet name="Mahmadsaid" job="Web Developer" city="Dushanbe"/>,
    document.getElementById('root')
);

///////////////////////////////////////////////////////////////////////////////////////////////////////

export default class Greet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showResult: true
        }
    }

    render() {
        return(
            <div>
                <div>
                    <h3>Field one</h3>
                </div>
                {this.state.showResult ? <div><h3>Field two</h3></div> : null}
                <button onClick={() => {
                    this.setState({
                        showResult: false
                    })
                }}>Hide field</button>
            </div>
        )
    }
}

ReactDOM.render(<Greet/>, document.getElementById('root'));
