import service from "../request/index";

interface LoginData{
    account :string,
    password:string
}

export function login(data:LoginData){
    return service({
        //配置接口子地址，需要与接口名一致
        url:"/login",
        method: "POST",
        data
})

}

export function goodlist(){
    return service({
        //配置接口子地址，需要与接口名一致
        url:"/goods",
        method: "get",
        
})

}

export function getUserlist(){
    return service({
        //配置接口子地址，需要与接口名一致
        url:"/user",
        method: "get",
        
})

}

export function getRolelist(){
    return service({
        //配置接口子地址，需要与接口名一致
        url:"/role",
        method: "get",
        
})

}