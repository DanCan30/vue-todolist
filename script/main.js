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

        addToList: function(list, itemToAdd) {

            itemToAdd = {
                text: this.newTask,
                done: false,
            }

            if(this.newTask != "") {
                list.push(itemToAdd);
                this.newTask = "";
                this.placeholder = "Type a task...";
            } else {
                this.placeholder = "Task not valid";
            };
            
        },

        toggleDoneUndone: function(element) {
            element.done = !element.done;
        },

    },
}
    
)