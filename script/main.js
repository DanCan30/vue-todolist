const app = new Vue (

{
    el: "#app",

    data: {
        todos: [
        {
            text: 'Fare i compiti',
            done: false
        },
        {
            text: 'Fare la spesa',
            done: true
        },
        {
            text: 'Fare il bucato',
            done: false
        }
    ]

    },

    methods: {
        
        removeFromList: function(list, index) {
            list.splice(index, 1);
        }

    }
}
    
)