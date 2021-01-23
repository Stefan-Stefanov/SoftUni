function smallestOfThree(a, b, c) {
    let smallest = Number.MAX_SAFE_INTEGER;
    
    smallest = smaller(a, smallest);
    smallest = smaller(b, smallest);
    smallest = smaller(c, smallest);

    function smaller(n, small) {
        if (n < small) {
            small = n;
        }
        return small;
    }
    return smallest;
}
console.log(smallestOfThree(2, 5, 3));