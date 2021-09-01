/*exercise 1*/
    let base = 7;
    let height = 4;

    let areal = base*0.5*height;

    console.log(areal);

/*exercise 2*/
    const name = 'Amanda';
    let lastN = 'Blondal';
    let salary = 5000;
    let laborM = 0.08 * salary;
    const tax = 0.25;
    let holyPay = 0.125 * 5000;

    console.log(name,lastN + ' salary before tax is ' + salary + ' .She pays ' + salary * 0.25 + ' in taxes.');

/*exercise 3*/
    let sentence = 'hello, my name is Amanda';
    console.log(sentence.length); //length of string
    console.log(sentence.indexOf('Amanda')); //name placement

/*exercise 4*/
    const capName = 'amanda';
    const str1 = capName.slice(1); //remove first letter
    console.log(str1);

    const str2 = capName.charAt(0).toUpperCase() + str1; //add and capitalize A
    console.log(str2);

/*exercise 5*/
    

/*exercise 6*/
    const classN = ['Jeppe','Sara','Carolina','Josefine','Amanda','Lotte'];
    console.log(classN); 

    let newLength = classN.push('Mie'); //add classmate
    console.log(classN);

    /*remove index 3*/

    let last = classN.pop(); //remove last classmate
    console.log(classN);

    /*show number of indexes*/

    /*show own name*/