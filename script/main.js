const app = new Vue (

{
    el: "#app",

    data: {
        todos: [],

        newTask: "",

        placeholder: "Type a task...",

    },

    methods: {
        
        removeFromList: function(list, index) {

            list.splice(index, 1);

        },

        addToList: function(list) {

            const trimmedInput = this.newTask.trim();

            if(trimmedInput != "") {
                list.push({text: this.newTask, done: false});
                this.newTask = "";
                this.placeholder = "Write a task...";
            } else {
                this.newTask = "";
                this.placeholder = "Task not valid";
            };
            
        },

        toggleDoneUndone: function(element) {
            element.done = !element.done;
        },

    },
},
    
);