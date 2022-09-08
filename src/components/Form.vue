<template>
    <div v-show="editIsEnabled" class="containerTask container" >
            <p>
              <!-- <label for="title">Titulo:</label><br> -->
              <input type="text" name="title" id="title" placeholder="Insira o titulo da tarefa" v-model="task.title">
          
            </p>
          
            <p>
                <label for="due">Vencimento:</label><br>
                <input type="date" name="due" id="due" placeholder="Vencimento da tarefa" v-model="task.dueTo">
            
            </p>
      
            <p>
                <label for="projectInput">Categoria</label><br>
                <select name="projectInput" v-model="task.project">
                    <option>Estudos</option>
                    <option>Tabalho</option>
                    <option>Pessoal</option>
                </select>
                    
            </p>
      
            <p>
                <input type="text" name="user" id="user" placeholder="Insira seu nome de usuário" v-model="task.user">
            </p>

            <div class="buttons">
                <a v-if="editingTask === true" class="sendBtn btn" @click.preventDefault="updateTasks(task)">Atualizar</a>
                <a v-else class="sendBtn btn" @click.preventDefault="postTasks(task)">Salvar</a>

                <a href="./index.html" class="sendBtn btn">Cancelar</a>
            </div>
        </div>
</template>

<script>
    import apiRequests from '@/apiRequests';
    export default {
        name: 'Form',
        methods: {
            postTasks(task) {
                apiRequests.postTasks(task);
                apiRequests.reloadPage()
            },
            updateTasks(task) {
                apiRequests.updateTasks(task);
                apiRequests.reloadPage()
            }
        },
        props: {
            editIsEnabled: Boolean,
            editingTask: {
                type: Boolean,
            },
            task: {
                type: Object,
                required: true,
            }
        },
    }
</script>