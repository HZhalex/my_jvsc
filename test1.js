const nemo = ['nemo'];
const everyone = []
function findNemo(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
}
findNemo(nemo);