class PostFetch {
    constructor(name) {
        this.name = name;
        this.url = "http://localhost:3000";
    }

    postFetch(params) {
        console.log(params)
        fetch(this.url + `/finishedquizzes`, {
           method: 'POST',
           headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json'
           },
           body: JSON.stringify({
              name: `${params}`
           })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
}