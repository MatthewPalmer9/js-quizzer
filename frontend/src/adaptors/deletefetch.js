class DeleteFetch {
    constructor(name) {
        this.name = name;
        this.url = "http://localhost:3000"
    }

    deleteFetch(params) {
        fetch(url + `/finishedquizzes/${params}`, {
           method: 'DELETE',
           headers: {
              'Content-type': 'application/json'
           }
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}