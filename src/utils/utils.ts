
export const addDate=(date:Date, days:number) =>{
   console.log("date-1",date)
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    date=result
    console.log("date-2 ",date)
    return date;
  }
  

  