function Case(str) {   
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase(); 
 }
 console.log(Case('AllThe-small Things'));