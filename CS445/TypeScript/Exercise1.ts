class University {
    name: string;
    dept: string;
    constructor(name: string, dept: string){
        this.name = name;
        this.dept = dept;
    }
    // graduation(year: number){
    //     console.log(`Graduating ${this.dept} ${year} students`)
    // }
    graduation(year: number): void{
        console.log(`Graduating ${this.dept} ${year} students`)
    }
}

let miu = new University("MIU", "MSD");
miu.graduation(2022);//Graduating MSD 2022 students