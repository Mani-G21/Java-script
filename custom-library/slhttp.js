class slhttp{
    processResponse(response){
        if(response.ok){
            return response.json();
        }
        throw new Error(`Status: ${response.status}`);
    }

    get(url){
        return new Promise((resolve, reject) =>{
         fetch(url)
            .then(response => this.processResponse(response))
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    post(url, data){
        return new Promise((resolve, reject) => {
            const requestOptions = {
                method: `POST`,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            };

            fetch(url, requestOptions)
                .then(response => this.processResponse(response))
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    put(url, data){
        return new Promise((resolve, reject) => {
            const requestOptions = {
                method: `PUT`,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            };

            fetch(url, requestOptions)
                .then(response => this.processResponse(response))
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    delete(url){
        return new Promise((resolve, reject) =>{
            const requestOptions = {
                method: `DELETE`
            };

            fetch(url, requestOptions)
                .then(response => this.processResponse(response))
                .then(data => resolve(data))
                .catch(err => reject(err)); 
        })
    }

}