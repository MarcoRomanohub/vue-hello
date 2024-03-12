const { createApp } = Vue;



createApp({

  data(){
    return{
      message: 'Ciao Vue!',
      image: '<img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="img">',
      image2: {
        // oggetto con proprietà
        path: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
        alt: 'image'
      }, 
      reactive:'reactive',
      coloreCss: 'verde',
      name: 'Marco'
    }
  },

  methods:{



  }

}).mount('#app')