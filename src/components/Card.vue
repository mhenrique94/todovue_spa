<template>
    <div class="card card-stacked">
        <div class="card-content">
            <span class="card-title activator">{{ tarefa.title }}
                <i class="fa-solid fa-bars right pink-text"></i>
            </span>    
            
            <span class="projeto">{{ tarefa.project }}</span>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">{{ tarefa.title }}<i class="fa-solid fa-close icon right pink-text"></i></span>
            <p>Validade: {{ tarefa.dueTo }}</p>
            <p>Autor: {{ tarefa.user }}</p>
        </div>
        <!-- excluir tarefa -->
        <div class="card-action">
            <a @click.prevent="deleteTasks(tarefa.id)">
            <i class="fa-solid fa-trash trash-icon pink-text"></i>
            </a>
            <!-- editar tarefa -->
            <a @click="$emit('edita-task', tarefa);">
            <i class="fa-solid fa-edit pink-text"></i>
            </a>
        </div>
    </div>
</template>

<script>
import apiRequests from '@/apiRequests';

    export default {
        name: 'Card',
        props: {
            tarefa : {
                type: Object,
                required: true,
            },
            task: {
                type: Object,
            },
            editingTask: {
                type: Boolean,
            },
            editIsEnabled: {
                type: Boolean,
            },
            
        },

        methods: {
            deleteTasks(id){
                apiRequests.deleteTasks(id)
                apiRequests.reloadPage()
            },
        },
    }
</script>

<style>
    .trash-icon {
        width: 30px;
        height: 30px;
    }

    .card-reveal{
        display: none;
    }

    .icon {
        font-size: 24px;
    }

</style>