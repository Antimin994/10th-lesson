const secret = {
    "!": [17],
    " ": [5,10],
    "e": [1,15],
    "o": [4,8],
    "h": [0],
    "l": [2,3,13,14,16],
    "f": [6],
    "r": [7],
    "m": [9],
    "H": [11],
    "i": [12],
}

var solution = [];

for (var j = 0; j <= 17; j++) {
 for (var key in secret) {
  var value = secret[key];
  for (var i = 0; i < value.length; i++) {
    
    if (value[i] == j) {
      solution.push(key);  
    } 
  }; 
    
 }
};

document.write('<h1>' + solution.join('') + '<h1>');