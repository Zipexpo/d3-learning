// create object:
// name
// age
// scores : [] list of score
myObject = {"name":"Ngan",
            "age":32,
            scores: [9,8,8,7]
        };

// calculate average
scores = myObject.scores; 
average = 0;
for (i=0;i<scores.length;i++){
    average+=scores[i];
}
average = average/scores.length;
myObject.average = average; //  Gan lai

average = 0;
myObject.scores.forEach(function(d,i){
    average= (average*i +d)/(i+1);
})
myObject.average = average; //  Gan lai

myObject.average = myObject.scores.reduce((pre,c)=>pre+c)/myObject.scores.length;

myObject.averageFunc = function() {
    this.average = this.scores.reduce((pre,c)=>pre+c)/this.scores.length;
}

myObject.averageFunc();
// add "average" into object

