
export interface listInt{
    userid:number;
    id:number;
    title:string
}
//定义接口，定义数据类型
interface selectDataInt{
    title:string,
    page:number,//页码
    count:number,//总条数
    pagesize:number,//默认一页显示几条数据

}
//定义一个类
export class initData{
    selectData:selectDataInt={
        title:"",
        page:1,
        count:0,
        pagesize:10
    }
    list:listInt[]=[]//展示的内容数据

}