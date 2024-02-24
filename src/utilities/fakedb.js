const AddToDB=(id)=>{
const PreviousData=GetPreviousData();
PreviousData[id]=5;
localStorage.setItem('bookmaredNews',JSON.stringify(PreviousData));
}


const GetPreviousData=()=>{
    let BookMared={};
    const PreviousData=localStorage.getItem('bookmaredNews')
    if(PreviousData){
        BookMared=JSON.parse(PreviousData);
    }
    return BookMared;
}

const AddToTimeDB=(total)=>{
    // const previousTime=GetPreviousTime();
    // let total=previousTime+newtime;
    localStorage.setItem('totalTime',total+'')
}

const GetPreviousTime = () => {
  let previousTime = 0;
  const previousTotal =parseInt(localStorage.getItem("totalTime"));
  if (previousTotal) {
    previousTime = previousTotal;
  }
  return previousTime;
};




export {
    AddToDB,
    GetPreviousData,
    AddToTimeDB,
    GetPreviousTime
}