import service from ".";

interface LoginData{
    account :string,
    password:string
}

export function login(data:LoginData){
    return service({
        url:"/login",
        method: "post",
        data:""
    
})

}