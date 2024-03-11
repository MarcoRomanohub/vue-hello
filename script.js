const { createApp } = Vue;



createApp({

  data(){
    return{
      message: 'Ciao Vue!',
      image: '<img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img">'
    }
  }

}).mount('#app')