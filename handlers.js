const randomArr = (arr, len) => {
    let newArr = [...arr];
    newArr.sort(()=>{
        return Math.random() - 0.5
    });
};