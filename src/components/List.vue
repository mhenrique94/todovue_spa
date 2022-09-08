<template>
    <div class="bodyWrapper">

        
        <div class="container" v-show="listIsEnabled">
            <div class="section">
              <!--   Icon Section   -->
                <div class="row">
                <!-- card de tarefa que repete para cada item do array -->
                    <div v-for="tarefa, index in tasks" class="horizontal" :key="index">
                        <Card
                        :tarefa="tarefa"
                        :task="task"
                        :editingTask="editingTask"
                        :editIsEnabled="editIsEnabled"
                        @edit-open = "editIsEnabled = true"
                        @list-open = "listIsEnabled = false"
                        @edita-task="
                            (receives) => {
                                task = receives;
                                editingTask = true;
                                editIsEnabled = true;
                                listIsEnabled = false;
                                $emit('atualiza-task', task);
                            }
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    
          
    </div>
</template>

<script>
    import apiRequests from '@/apiRequests';
import Card from './Card.vue'

    export default {
      name: 'List',
      components: {
        Card,
      },
      props: {
        task: {
            type: Object,
        }
      },
      data(){
        return {
            tasks: [
            ],
            editingTask: false,
            editIsEnabled: false,
            listIsEnabled: true,
        }
      },

      methods: {
        getTasks() {          
            apiRequests.getTasks((respostaApi) => {
            this.tasks = respostaApi;
            });
        },
        editTasks(id) {
            apiRequests.editTasks((respostaApi) => {
            this.task = respostaApi;
            });
        this.reload();
        },
      },
      created(){
        this.loading = true
        this.getTasks()
        },
    }

</script>

<style>
    .buttons {
        /* height: 100px; */
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }
    

    .btn-floating{
        position: fixed;
        left: 2%;
        top: 15%;
    }

    button, input, select {
        width: 80%;
        margin:  0px auto 0px auto;
        display: block;
        border-radius: 12px;
        border: none;
        height: 40px;
        padding: 4px;
        background-color: rgb(246, 246, 246);
        font-size: larger;
    }

    select {
        width: 100%;
    }

    label{
        width: 100%;
        text-align: left;
        display: block;
        font-weight: 700;
    }
    .containerTask{
        display: flex;
        flex-direction: column;
        margin:  40px auto 20px auto;
        width: 50%;
        height: 70%;
    }

    .title {
        font-weight: bold;
        font-size: 24pt;
        margin-left: 20px;
    }
    .horizontal{
        text-align: left;
    }

</style>