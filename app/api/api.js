var api = {
    constURL: "http://api.lesson-time.com/v2/auth/url",
    getJSON(value1, value2){
        var url = "http://api.lesson-time.com/v2/auth/url";
        return fetch(url,{
            method: "GET",
            headers:{
                value1 : value2
            }
        }).then((res) => res.json());
    }
}

export default api;