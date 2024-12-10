var containDuplicate = function(nums){
    const objNums = {};

    for (let intNum of nums){
        if (objNums.hasOwnProperty(intNum)){
            return true;
        }
        objNums[intNum]  = true;
    }
    //objNums.hasOwnProperty(intNum) kiểm tra xem phần tử intNum đã được thêm vào objNums trước đó hay chưa.Nếu intNum đã tồn tại, nghĩa là mảng nums có chứa phần tử trùng lặp, và hàm trả về true.
    return false;
}

console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));