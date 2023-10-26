// const list = document.querySelector('#list');

// var rhymePart = "little ducks went out one day, over the hill and far away. Mama duck said 'quack, quack, quack', but only ";
// let duckCount = 5;

// for (let i = duckCount; i >= 0; i--) {
//     if (i > 1) {
//         console.log(i + " " + rhymePart + (i - 1) + " little ducks came back.");
//     } else if (i === 1) {
//         console.log(i + " little duck went out one day, over the hill and far away. mama duck said, 'quack, quack, quack,' but no little ducks came back.");
//     } else {
//         console.log("No little ducks came back.");
//     }

//     const verse = document.createElement('p');
//     verse.textContent = 
// }


const list = document.querySelector('#list');

var rhymePart = "little ducks went out one day, over the hill and far away. Mama duck said 'quack, quack, quack', but only ";

for (var duckCount = 5; duckCount >= 0; duckCount--) {
    let textString = " ";

    if (duckCount > 1) {
        textString = duckCount + " " + rhymePart + (duckCount - 1) + " little ducks came back."
    } else if (duckCount === 1) {
        textString = duckCount + " little duck went out one day, over the hill and far away. Mama duck said 'quack, quack, quack', but no little ducks came back.";
    } else {
        textString = "No little ducks came back.";
    }

    const verse = document.createElement('p');
    verse.textContent = textString;

    list.appendChild(verse);
}
