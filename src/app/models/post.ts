export class Post{

    p_id:number;
    u_id:number;
    description:string;
    category:string;
    location:string;
    init_date:number;
    end_date:number;

    constructor(p_id:number,u_id:number,description:string,category:string,
        location:string,init_date:number,end_date:number){
            this.p_id = p_id;
            this.u_id = u_id;
            this.description = description;
            this.category = category;
            this.location = location;
            this.init_date = init_date;
            this.end_date = end_date;
        }


}