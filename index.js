var x = 12;

// (condition that if true, code block runs)
if(x % 2 === 0) {
    console.log('is even');
}
// alternative condition when if is false
else {
    console.log('is odd');
}

// (init; condition; post-loop)
for(var i = 0; i < 10; i++) {
    var y = i * 2;
    if(y < 10) {
        console.log('the number doubled is', y);
    }
}

