import axios from "axios"; 

export default {

    getSubmissions: function() {
        return axios.get("/api/submissions"); 
    }, 
    loadSubmission: function(id) {
        return axios.get("api/submissions/" + id); 
    }
}; 