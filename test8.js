function printAllNumbersThenAllPairSums(numbers) {
    console.log("these are the numbers:");
    numbers.forEach(function(number) {
        console.log(number);
    });

    console.log("and these are thier sums:");
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(secondNumber + firstNumber);
        })
    })
}
printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n^2)