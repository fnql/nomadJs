const calculator = {
    add: function(a,b) {
        console.log(a+b);
    },
    minus: function(a,b) {
        console.log(a-b);
    },
    div: function(a,b) {
        console.log(a/b);
    },
    mul: function(a,b) {
        console.log(a*b);
    },
    power: function(a,b) {
        console.log(a**b);
    }
}

calculator.add(4,5);
calculator.minus(10,2);
calculator.div(50,5);
calculator.mul(7,3);
calculator.power(3,5);