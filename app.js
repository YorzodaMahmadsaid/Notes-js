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

let arrayOfNames: string[] = ['Said', 'Navruz', 'Firuz'];
console.log(arrayOfNames);

///////////////////////////////////////////////////////////////////////////////////////////////////////
