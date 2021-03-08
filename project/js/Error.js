export const Error ={
    data() {
        return {
            errorMessage: '',
        }
    },
    methods: {
        showError(errorMessage){
           this.errorMessage = errorMessage;
             }
        },
        template:`
            <div v-if="errorMessage"> 
                <p>Ошибка</p>
            </div>
       
        `
};