 import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";



export default function Canvas(props) {
 const data01 = [];
const data02=   []
    console.log(props,"grfapple afgdasfdasf")
   let  x=props.amap
let sum=0
for(let i=0;i<x.length;i++){
    sum+=x[i].ttime
}


   for (let i=0;i<x.length;i++){
    let y= {
        'name':x[i].key,
        'value':x[i].ttime    }   
        let z={
            'name':Math.round((100*x[i].ttime)/sum),
            'value':x[i].ttime
        }

        data01.push(y)
        data02.push(z)


   }

 

  return (
    <PieChart width={1000} height={400}>
      
    
        <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={120}
        fill="#008080"
        label
      />
        <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data02}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#008000"
     
      />

      
     
      <Tooltip />
    </PieChart>
  );
}
