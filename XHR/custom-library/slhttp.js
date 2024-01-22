function slhttp(){
    this.xhr = new XMLHttpRequest();
}

slhttp.prototype.get = function(url,callback){
    this.xhr.open("GET", url, true);
    this.xhr.send();

    this.xhr.onload = function(){
        if(this.status === 200){
            callback(JSON.parse(this.responseText),null);

        }else{
            callback(null, `Status: ${this.status}`);

        }
    }
}

slhttp.prototype.post = function(url,data,callback){
    this.xhr.open("POST", url, true);
    this.xhr.setRequestHeader('Content-Type', 'application/json');
    this.xhr.onload = function(){
        if(this.status === 200 || this.status === 201)
        {
            callback(JSON.parse(this.responseText),null);
            
        }
        else{
            callback(null, `Status: ${this.status}`)
        }
    }
    this.xhr.send(JSON.stringify(data));
}

slhttp.prototype.put = function(url,data,callback){
    this.xhr.open("PUT", url, true);
    this.xhr.setRequestHeader('Content-Type', 'application/json');
    this.xhr.onload = function(){
        if(this.status === 200 || this.status === 201)
        {
            callback(JSON.parse(this.responseText),null);
            
        }
        else{
            callback(null, `Status: ${this.status}`)
        }
    }
    this.xhr.send(JSON.stringify(data));
}

slhttp.prototype.delete = function(url, callback){
    this.xhr.open("DELETE", url, true);
    this.xhr.onload = function(){
        if(this.status === 200 || this.status === 201)
        {
            callback(JSON.parse(this.responseText),null);
            
        }
        else{
            callback(null, `Status: ${this.status}`)
        }
    }
    this.xhr.send();
}