let ajax = (http, success, error) => {
    if (!http) {
        throw new Error("Must define an http object")
    }
    let xhr = new XMLHttpRequest();
    xhr.open(http.type, http.url);
    xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
            success(xhr.response);
        } else {
            error({
                status: this.status,
                statusText: xhr.statusText
            });
        }
    };
    xhr.onerror = function() {
        error({
            status: this.status,
            statusText: xhr.statusText
        })
    }
    xhr.send();
}

ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/'
}, function success(response){
    var posts = response;
    ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users/'
    }, function success(response){
        console.log(response)
        var users = response
        ajax({
            type:'GET',
            url: 'https://jsonplaceholder.typicode.com/photos'
        }, function success(response){
            console.log(response)
            var photos = response
        }, function error(response){
            console.log(response)
        })
    }, function error(error){
        console.log(error)
    })

}, function error(error){
    console.log(error)
})