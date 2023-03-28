/*Descrizione:
Stampare a schermo un messaggio all’interno di un :puntare_a_destra: h1 :puntare_a_sinistra: utilizzando una proprietá nell'oggetto restituito dalla funzione data.*/

const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: "Ciao belli",
      }
    }
  }).mount('#app');