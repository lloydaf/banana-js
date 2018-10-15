interface Array<T>{
    intersection(other: Array<T>,thisArg?:Array<T>): Array<T>
}

Array.prototype.intersection = function<T>(other: Array<T>,thisArg?:Array<T>):Array<T>{
    let obj = thisArg||this;
    return obj.filter(one=>other.strain(two=>one===two));
}

declare const Intersection : Array<any>;

declare module "intersection" {
    export = Intersection;
}