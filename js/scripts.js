function cryptoSquare(){
    var str = $("#string").val();
    str = str.replace(/\s/g, '');
    str = str.replace(/[!@#$.%?^&*]/g, "");
    str = str.toLowerCase();
    var array = str.split("");
    var squareRoot = Math.sqrt(str.length);
    var cryptoArray= [];
    var outputCryptoArray = [];
    var counter = 0;
    var rows = 0;
    var cols = 0;
    
    console.log(str.length);
    console.log(array.length);

    if(str.length % squareRoot === 0) {
        rows = squareRoot;
        cols = squareRoot;
    } else if (str.length < (Math.trunc(squareRoot) +1) * Math.trunc(squareRoot)) {
        rows = Math.trunc(squareRoot) +1;
        cols = Math.trunc(squareRoot);
    } else {
        rows = Math.trunc(squareRoot) +1;
        cols = Math.trunc(squareRoot) +1;
    }
    console.log(rows);
    console.log(cols);

    for (var x=0; x < squareRoot; x++) {
        this["cryptoArray"+ x] = str.slice(0, squareRoot);
        str = str.slice(squareRoot);
    }

    while(counter <= squareRoot) {
        for (z = 0;z <= squareRoot; z++) {
          var tempCrypto = this["cryptoArray"+z];
          outputCryptoArray.push(tempCrypto[counter]);
        };
        counter++;
      };
   
    console.log(outputCryptoArray);
   
   
   

};

$(document).ready(function(){
    $("#form").submit(function(){
        event.preventDefault();
        cryptoSquare();
    });
});
