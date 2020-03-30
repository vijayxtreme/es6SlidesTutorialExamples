let ajaxP = (http) => {
    return new Promise((resolve, reject) => {
        if (!http) {
            throw new Error("Must define an http object")
        }
        let xhr = new XMLHttpRequest();
        xhr.open(http.type, http.url);
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText
            })
        }
        xhr.send();
    })
}

ajaxP({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/'
}).then((result)=>{
    console.log(result)
    return ajaxP({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users/'
    });
}).then((result)=>{
    console.log(result)
    return ajaxP({
        type:'GET',
        url: 'https://jsonplaceholder.typicode.com/photos'
    })
}).then((result)=>{
    console.log(result)
})
.catch(error => console.log(error))


