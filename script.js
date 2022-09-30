const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    //var test=  window.getSelection().toString();
    var test=resultEl.textContent;
    /*navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state == "granted" || result.state == "prompt") {
          alert("Write access granted!");
        }
      });
      navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
        if (result.state == "granted" || result.state == "prompt") {
          alert("Read access granted!");
        }
      });*/
      navigator.clipboard.writeText(test).then(() => {
        /* Resolved - text copied to clipboard */
        alert("Text copied to clipboard---"+test);
        navigator.clipboard.readText().then((copiedText) => {
         alert("Read text from clipboard:--"+copiedText)
      },(err)=>{
        //alert("Read text from clipboard failed"+err)
    });
      },() => {
        alert("Text copied to clipboard failed");
      });
    //navigator.clipboard.writeText(test);
    //alert(test)
})


generateEl.addEventListener('click', () => {
    generatePassword(lowercaseEl.checked, uppercaseEl.checked, numbersEl.checked, symbolsEl.checked, lengthEl.value) 
})

function generatePassword(lower, upper, number, symbol, length) {
    var pwd="";
    var chr="";
    while (pwd.length<length) {
        if(lower)
        chr=chr+randomFunc.lower();
        if(number)
        chr=chr+randomFunc.number();
        if(symbol)
        chr=chr+randomFunc.symbol();
        if(upper)
        chr=chr+randomFunc.upper();

        pwd=chr;
    }
    document.getElementById("result").textContent=pwd;
    //alert("password@@"+pwd)
    
}

function getRandomLower() {
     var string = "abcdefghijklmnopqrstuvwxyz"; 
     var entity1 = Math.ceil(string.length * Math.random()*Math.random());
     return string.charAt(entity1);
    
   }

function getRandomUpper() {
    var string = "abcdefghijklmnopqrstuvwxyz".toUpperCase(); 
    var entity4 = Math.ceil(string.length * Math.random()*Math.random());
    return string.charAt(entity4);
}

function getRandomNumber() {
    var numeric = '0123456789';
    var entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
    return numeric.charAt(entity2);

}

function getRandomSymbol() {
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
    return punctuation.charAt(entity3);
}