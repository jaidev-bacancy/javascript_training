// Create a generic function called wrapInArray that accepts any value and returns it inside an array.
function wrapInArray<T>(val: T): T[] {
    return [val];
}

const val: number = 23;
const arr: number[] = wrapInArray<number>(val);

console.log(arr);


// Create a generic interface PaginatedRespoonse<T> with properties:
//      items: T[],
//      total: number

interface PaginatedResponse<T> {
    items: T[],
    total: number
}