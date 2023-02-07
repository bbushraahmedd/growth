import tokenService from "./tokenService";

const BASE_URL = '/api/tasks/';

export function create(task){
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: new Headers({'Content-Type': 'application/json', Authorization: "Bearer " + tokenService.getToken()})
    }).then((responseFromTheServer) => {
        if(responseFromTheServer.ok) return responseFromTheServer.json()

        return responseFromTheServer.json().then(res => {
            console.log(res, "response in Pst creat fun in UTILS folder")
            throw new Error('somethings wrong in create post')
        })
    })
}

export function getAll(){
    return fetch(BASE_URL, {
        headers: {
            'Content-Type': 'application/json', Authorization: "Bearer " + tokenService.getToken()
        }
    })
    .then(res => res.json());
}

export function deleteTask(taskId) {
    return fetch(`${BASE_URL}/${taskId}`, {
        // getting a bad request error 😭,, but delete it working 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json', 
            Authorization: "Bearer " + tokenService.getToken()
        }
    }).then((res) => {
        if (res.ok) return res.json();
    })
}