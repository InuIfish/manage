export interface ListInt{
    id:number,
    nickName:string,
    userName:string,
    role:RoleInt[]
}
//定义数组对象里面的类型
interface RoleInt{
    role:number,
    roleName:string
}
interface RoleListint{
    authority:number[],
    roleId:number,
    roleName:string
}
interface selectDataInt{
    //通过role与nickName来标识一个人，可通过下面两个参数来定位、展示一个人的信息
    role:number,
    nickName:string
}

interface activeInt{
    id:number,
    nickName:string,
    userName:string,
    role:number[]
}

export class initData{
    selectData:selectDataInt={
        role:0,
        nickName:""
    }
    list:ListInt[]=[]//展示的内容数据
    roleList:RoleListint[]=[]
    isShow =false

    //用于接受当前活跃的对象
    active :activeInt={
    id:0,
    nickName:"",
    userName:"",
    role:[]
    }
}
