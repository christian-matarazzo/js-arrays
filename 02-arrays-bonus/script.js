const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log(teachers);

const reversedTeachers = []
for(let i = teachers.length - 1; i>=0; i--){


  reversedTeachers.push(teachers[i]);

}

console.log(reversedTeachers);



// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for(let i = 0; i < teachers.length; i++)

  if (teachers[i].length >= 5) {

    longNames.push(teachers[i])

    console.log(longNames);
    
    
  }


// 3. Rimuovi 'Ed' dall'array teachers

console.log(teachers);


const removeEd = teachers.splice(1,1)

console.log(teachers, removeEd);


// there is a variant i tried out but will let the index empty

/* 
delete teachers[1]

console.log(teachers); 
*/
    

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

teachers.indexOf('Fabio')
console.log(teachers.indexOf('Fabio'));

const isFabioPresent = teachers.indexOf('Fabio') != -1

console.log(isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

let teachersString = "";
for(var i = 0; i < teachers.length; i++) {

  teachersString  += teachers[i]

  if(i < teachers.length - 1 ) {

    teachersString += ","
    
  }

  
}

console.log(teachersString);

