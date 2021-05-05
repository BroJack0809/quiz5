import CounterButton from "./CounterButton"
const MultiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i)
        output.push(<CounterButton>第{i}個按鍵</CounterButton>);
    return output;
}
export default MultiButton;