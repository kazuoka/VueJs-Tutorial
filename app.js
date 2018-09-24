new Vue({
  el:"#vue-app",
  data:{
    message:"GeneralKazuoka",
    name:"Natchanon Uthitasan",
    job:"Freelance",
    age:"40"
  },
  methods:{
    getName:function(){
      return this.name
    },
    setName:function(n){
      return this.name=n
    }
  }
})
