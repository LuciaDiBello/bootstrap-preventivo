
//Si dichiara un vettore di stringhe con i codici promozionali 
const promo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];  //array<string>

//si recupera il form con i dati dell'utente
const form = document.getElementById('form-preventivo');
//Se l'utente clicca sul bottone viene eseguita la funzione calcolaPreventivo
form.addEventListener('submit', calcolaPreventivo); 

//Funzione che accetta un parametro di tipo evento
//Quando l'utente clicca sul bottone si recuperano i campi inseriti dall'utente
//e si cacola il preventivo
function calcolaPreventivo(e) {
	e.preventDefault()  //si usa il metodo preventDefault per disabilitare la propagazione del submit
	
//Si recuperano i dati inseriti da tastiera del form, il tipo di lavoro e il codice promozionale
const selectJob = document.getElementById('select-job').value;  //string
const inputCode = document.getElementById('code').value;     //string
console.log('selectJob: ', selectJob, typeof(selectJob));
console.log('inputCode: ', inputCode, typeof(inputCode));
	
//si prevedono 10 ore di lavoro
// const hour = 10;  //numero

 //si inseriscono le ore di lavoro
const hour=parseInt(prompt('ore di lavoro'));  
console.log('Le ore sono: ', hour);

hourElement = document.getElementById('hour');
hourElement.innerHTML =`Numero di ore: ${hour}`;

let price;  //numero
    
//Si calcola il prezzo in base al tipo di lavoro selezionato dall'utente
// 1 -> Backend Development
// 2 -> Frontend Development
// 3 -> Data Analisys 
if  (selectJob === '1')
                price = hour*20.5;
else if (selectJob === '2')
               price = hour*15.30;
     else price = hour*33.60;  
        
    console.log('il price è: ', price);

  //Si calcola lo sconto 
  //si verifica se il codice promozionale inserito dall'utente è un elemento dell'array di codici
  //se il codice inserito non è valido si stampa un alert
    let discount = 0;  //numero
    if (promo.includes(inputCode)) {
            discount = price*0.25;
            console.log('il discount è: ', discount);
    } else { 
        console.log('codice non valido');
        alert('codice promozionale non valido');    
      }
    
//si sottrae lo sconto al prezzo base e si ottiene il prezzo finale
      const tot = price - discount;  //numero
      console.log('tot', tot, typeof(tot));

//si approssima il prezzo a due cifre decimali
      //tot_fixed = parseInt(tot.toFixed(2));  //numero

    //si calcola la parte intera e la parte decimale del prezzo
     //const entire = Math.floor(tot_fixed);   //numero: parte intera del prezzo
     //const decimal = (tot_fixed - entire)*100;  //numero: parte decimale del prezzo
     //console.log('entire', entire, typeof(entire));
     //console.log('decimal', decimal, typeof(decimal));

//Si esegue la conversione dei numeri in stringa 
     //const intString = entire.toString();   //stringa
     //const decString = decimal.toString();  //stringa

tot_fixed = tot.toFixed(2);  //stringa
console.log('tot_fixed', tot_fixed, typeof(tot_fixed));

const l=tot_fixed.length;

entire = tot_fixed.slice(0, l-3);  //array
dec = tot_fixed.slice(l-2);  //array

console.log('entire: ', entire, typeof(entire));
console.log('dec: ', dec, typeof(dec));

//Si visualizza il prezzo sulla pagina web nell'elemento result
//solo la parte intera del prezzo è in grassetto
     resultElement = document.getElementById('result');
     resultElement.innerHTML =`<span class="fw-bold fs-4"> &euro; ${entire}</span>` + ',' + `<span class="fs-4">${dec}</span>` ;

     //si cancellano i dati inseriti nel form dopo il loro invio 
     document.getElementById("name").value = '';
     document.getElementById("surname").value = '';
     document.getElementById("email").value = '';
     document.getElementById("text-area").value = '';
     document.getElementById("code").value = '';
    
}
