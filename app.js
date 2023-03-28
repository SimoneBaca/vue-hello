/*Descrizione:
Stampare a schermo un messaggio all’interno di un :puntare_a_destra: h1 :puntare_a_sinistra: utilizzando una proprietá nell'oggetto restituito dalla funzione data.*/

const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: "Ciao Belli",
        imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQw4PpmJjh2Ym8rqRm3tPgifO_oNVf7IPi176_jer6cQ&s"
      }
    }
  }).mount('#app');