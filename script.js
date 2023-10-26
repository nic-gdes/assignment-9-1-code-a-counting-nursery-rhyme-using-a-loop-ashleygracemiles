var rhymePart = "little ducks went out one day, over the hill and far away. Mama duck said 'quack, quack, quack', but only ";
let duckCount = 5;

for (let i = duckCount; i >= 0; i--) {
    if (i > 1) {
        console.log(i + " " + rhymePart + (i - 1) + " little ducks came back.");
    } else if (i === 1) {
        console.log(i + " little duck went out one day, over the hill and far away. mama duck said, 'quack, quack, quack,' but no little ducks came back.");
    } else {
        console.log("No little ducks came back.");
    }
}