function LongestWord(sen) {
    const arrWords = sen.split(" ");
    const regularExpression = /^[a-zA-Z0-9ñáéíóúÁÉÍÓÚÑ ,.'-]+$/u;
//    ^ và $: Bắt đầu và kết thúc chuỗi, đảm bảo rằng toàn bộ từ phải phù hợp với mẫu.
//    [a-zA-Z0-9ñáéíóúÁÉÍÓÚÑ ,.'-]+: Cho phép các ký tự chữ cái (a-z, A-Z), số (0-9), một số ký tự đặc biệt (như ñ, á, é,...), dấu cách, dấu phẩy, dấu chấm, dấu nháy đơn và dấu gạch ngang.
//    +: Ít nhất một ký tự phù hợp.
//    /u: Cờ Unicode để hỗ trợ các ký tự Unicode như các ký tự có dấu.
    let strLonger = "";

    for (let stringSen of arrWords) {
        if (regularExpression.test(stringSen) && stringSen.length > strLonger.length) {
// regularExpression.test(stringSen) Kiểm tra xem từ hiện tại (stringSen) có khớp với biểu thức chính quy hay không.
// Nếu không khớp, từ này bị loại bỏ và không xét đến.      
            
            strLonger = stringSen;
        }
    }

    // code goes here  
    return strLonger;
}

console.log(LongestWord("Hello there! This is a sample sentence to find the longest-word."));