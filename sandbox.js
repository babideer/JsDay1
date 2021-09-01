

/*exercise 1*/
console.log('Exercise 1');

    let base = 7;
    let height = 4;

    let areal = base*0.5*height;

    console.log(areal);

/*exercise 2*/
console.log('Exercise 2');
    const name = 'Amanda';
    let lastN = 'Blondal';
    let salary = 5000;
    let laborM = 0.08 * salary;
    const tax = 0.25;
    let holyPay = 0.125 * 5000;

    console.log(name,lastN + ' salary before tax is ' + salary + ' .She pays ' + salary * 0.25 + ' in taxes.');

/*exercise 3*/
console.log('Exercise 3');
    let sentence = 'hello, my name is Amanda';
    console.log(sentence.length); //length of string
    console.log(sentence.indexOf('Amanda')); //name placement

/*exercise 4*/
console.log('Exercise 4');
    const capName = 'amanda';
    const str1 = capName.slice(1); //remove first letter
    console.log(str1);

    const str2 = capName.charAt(0).toUpperCase() + str1; //add and capitalize A
    console.log(str2);

/*exercise 5*/
console.log('Exercise 5');
    let accountN = 4000;
    console.log(accountN);

    accountN++; //add 1 
    console.log(accountN);
    accountN++;
    accountN++;
    accountN++;
    accountN++; //adds 4
    console.log(accountN); 

    accountN--; //subtracts 1
    console.log(accountN); 

    accountN+=5; //adds 5
    console.log(accountN);

    accountN -=10; //subtracts 10
    console.log(accountN);

/*exercise 6*/
console.log('Exercise 6');
    let classN = ['Jeppe','Sara','Carolina','Josefine','Amanda','Lotte'];
    console.log(classN); 

    classN.push('Mie');//add a classmate
    console.log(classN);

    classN[3] = 'Imad';//index 3 placement
    console.log(classN);

    classN.pop();//remove last classmate
    console.log(classN);
    
    console.log(classN.length);//show number of indexes
    
    console.log(classN.includes('Amanda'));//show own name

/*exercise 6.1*/
console.log('Exercise 6.1');
    const daneA = ['Mads Mikkelsen', 'Ove Sprogøe', 'Dirch Passer'];
    const americanA = ['Leonardo Dicaprio', 'Johnny Depp', 'Helena Carter'];

    console.log(daneA, americanA);

    const conA = daneA.concat(americanA);
    console.log(conA);

/*exercise 6.2*/
console.log('Exercise 6.2');
    console.log(conA.indexOf('Leonardo Dicaprio')); //find position

    conA[3] = 'Leonardo Wilhelm Dicaprio'  //replace Leonardo
    console.log(conA);

    console.log(conA.join(', '));

/*exercise 7*/
console.log('Exercise 7');

    const myAge = 24;
    const sideJep = 22;

   console.log(myAge == sideJep) //same age

   console.log(myAge != sideJep)//age is different (! difference)

   console.log(myAge < sideJep)//one age is greater than og equal to
    
   console.log(myAge > sideJep)//one age is less than or equal to

/*exercise 8*/
console.log('Exercise 8'); 
    let mysAge = '24';
    console.log(typeof mysAge); //show variable is a string


``
/*exercise 9*/
console.log('Exercise 9');

    let name2 = `Amanda`;
    let lastName2 = `Blondal`;
    let myAge2 = `24`;
    let favourShow = `Modern Family`;
    let favourMovie = `Alien`;

console.log(`My name is ${name} ${lastName2}. I am ${myAge2} years old.  My favourite movie is ${favourMovie}`); //presentation with all variables in a string
    



