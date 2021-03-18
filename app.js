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
            showResult: true,
            buttonText: 'Hide field'
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
                        showResult: !this.state.showResult,
                        buttonText: 'Show field'

                    })
                }}>{this.state.buttonText}</button>
            </div>
        )
    }
}

ReactDOM.render(<Greet/>, document.getElementById('root'));

///////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Greet() {
    const [data, setData] = useState([{name: 'Yorzoda', age: 30, city: 'Dushanbe'}, {name: 'Mahmadsaid', age: 23, city: 'Norak'}]);
    const [infoInput, setInfoInput] = useState({name: '', age: '', city: ''});
    console.log(infoInput);
    return(
        <div>
            {
                data.map(elOfData => {
                return(
                    <div>
                        <span>{elOfData.name} - {elOfData.age} - {elOfData.city}</span>
                    </div>
                )})
            }
            <input type="text" placeholder="name" onChange={(e) => {
                setInfoInput({
                    name: e.target.value,
                    age: infoInput.age,
                    city: infoInput.city
                })
            }}/>
            <input type="text" placeholder="age" onChange={(e) => {
                setInfoInput({
                    age: e.target.value,
                    name: infoInput.name,
                    city: infoInput.city
                })
            }}/>
            <input type="text" placeholder="city" onChange={(e) => {
                setInfoInput({
                    city: e.target.value,
                    name: infoInput.name,
                    age: infoInput.age
                })
            }}/>
            <button onClick={() => {
                    setData(data => ([...data, infoInput])) }}>
                Add
            </button>
        </div>
    )
}

ReactDOM.render(<Greet/>, document.getElementById('root'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function MyForm() {
    const [data, setData] = useState([{name: 'Mahmadsaid'}]);
    const [name, setName] = useState({name: ''});

    function submitName() {
        setData(data => {
        return ([...data, name]);
        })
    }

    function handleNameInput(e) {
        setName({name: e.target.value});
    }

    return(
        <div>
            { data.map((userName, index) => <div key={index}>{userName.name}</div>) }
            <input type="text" placeholder="name" onChange={handleNameInput}/>
            <button type="submit" onClick={submitName}>Add</button>
        </div>
    )
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function MyForm() {
    const [data, setData] = useState([{name: 'Mahmadsaid', age: '30', city: 'Dushanbe', job: 'Web developer'}]);
    const [persianInfo, setPersianInfo] = useState({name: '', age: '', city: '', job: ''});
    
    function submitInfo() {
        setData(data => ([...data, persianInfo]))
    }

    function handleChangeName(e) {
        setPersianInfo({
            name: e.target.value,
            age: persianInfo.age,
            city: persianInfo.city,
            job: persianInfo.job,
        });
    }
    
    function handleChangeAge(e) {
        setPersianInfo({
            age: e.target.value,
            name: persianInfo.name,
            city: persianInfo.city,
            job: persianInfo.job,
        });
    }
    
    function handleChangeCity(e) {
        setPersianInfo({
            city: e.target.value,
            age: persianInfo.age,
            name: persianInfo.name,
            job: persianInfo.job,
        });
    }
    
    function handleChangeJob(e) {
        setPersianInfo({
            job: e.target.value,
            age: persianInfo.age,
            city: persianInfo.city,
            name: persianInfo.name,
        });
    }

    function getElements() {
       return data.map((userInfo, index) => {
            return <div key={index}>{userInfo.name} - {userInfo.age} - {userInfo.city} - {userInfo.job}</div>
        })
    }

    return(
        <div>
            <div>{getElements()}</div>
            <input type="text" placeholder="name" onChange={handleChangeName}/>
            <input type="text" placeholder="age" onChange={handleChangeAge}/>
            <input type="text" placeholder="city" onChange={handleChangeCity}/>
            <input type="text" placeholder="job" onChange={handleChangeJob}/>
            <button type="submit" onClick={submitInfo}>Add</button>
        </div>
    )
}
