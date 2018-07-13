import axios from "axios"; 

export default {

    getSubmissions: function() {
        return axios.get("/api/submissions");
    },
    getSubmissionsByTopic: function(topic) {
        return axios.get(`/api/submissions?topic=${topic}`);
    },
    loadSubmission: function(id) {
        return axios.get("api/submissions/" + id); 
    },
    addSubmission: function(topic, pullquote, language, date) {
        return axios.post("/api/submissions");
    },
    searchSubmissions: function(topic) {
        return axios.get(`/api/submissions/search/${topic}`);
    }
}; 