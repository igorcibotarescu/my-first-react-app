function TestEven({item}){
    return <h5>{item % 2 === 0 ? item + ' - Even' : item + ' - Not Even'}</h5>
}

function TestComponentMap(){
    const mList = [1,2,3,4,5,6];
    const key = [];
    for(let  i = 0;i<mList.length;i++){
        key.push(i);
    }
    return(
        <>
        {mList.map((item,index) =><TestEven item = {item} key = {key[index]}/>)}
        </>
    )
}

export default TestComponentMap;