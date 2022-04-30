let baseObject: {
    width: number,
    length: number
}

    baseObject = {
        width: 0,
        length: 0
    }

    let rectangle: any = Object.create(baseObject);// we use type "any" for rectangle. We don't use baseObject as 
    //a type for rectangle , (like we use Car as a type for newly created object, car in Q3) because "calcSize 
    //is not included in baseObject"

    rectangle.width = 8;
    rectangle.length = 4;

    rectangle.calcSize = function(){
        return this.width * this.length;
    }

    console.log(rectangle.calcSize(8,4));//32