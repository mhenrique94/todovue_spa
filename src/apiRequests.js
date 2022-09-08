import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
    postTasks: (task) => {
        const data = task;
        const headers = { "Content-Type": "application/json" };
        const dataJson = JSON.stringify(data);
        axios.post("/tasks", dataJson, {
          headers: headers,
        });
      },
    updateTasks(task){
        const dataJson = JSON.stringify(task);
        const headers = { "Content-Type": "application/json" };
        axios
        .patch(`/tasks/${task.id}`, dataJson, {
            headers: headers,
        });
    },
    getTasks: (callback) => {
        axios
          .get("/tasks")
          .then((response) => {
            callback(response.data);
          })
          .catch((error) => {
            console.log("error:", error);
          });
      },
    editTasks: (callback) => {
        axios
        .get(`/tasks/${this.task.id}`)
        .then((response) => {
            callback(response.data);
          })
          .catch((error) => {
            console.log("error:", error);
          });
    },
    deleteTasks(id){
        axios
        .delete(`/tasks/${id}`)
    },

    reloadPage(){
        window.location.href = "index.html";
    }
}