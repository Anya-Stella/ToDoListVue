class Task {
    constructor(name, date){
        this.name = name;
        this.date = date;
    }
}

var app = new Vue({
    el: '#app',
    data: {
      taskText: '',
      tasks: [],

    },

    methods: {
        makeTask : function(){
            // taskの作成
            let task = new Task(this.taskText, new Date().toLocaleString("ja"));
            this.tasks.push(task);

            // taskTextの消去
            this.taskText = "";

            // console.log("success");
        },

        removeTask : function(index){
            this.tasks.splice(index, 1);
        },
    }
  });