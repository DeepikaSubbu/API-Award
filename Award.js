

var title=document.createElement('H1')
title.setAttribute('id', 'title')
title.setAttribute('class', 'text-center')
title.innerText=("Awards")
document.body.appendChild(title)

let cont=document.createElement("div");
cont.setAttribute("class", "container");
document.body.append(cont);


let row = document.createElement("div")
row.setAttribute("class", "row");
cont.appendChild(row);




fetch("https://api.nobelprize.org/2.1/nobelPrizes")
.then((d)=>d.json())
.then((data)=>{
    console.log(data);
   console.log(data.nobelPrizes.length);
//    console.log(data.nobelPrizes[0].awardYear);

for(let i=0;i<25; i++){
    // console.log(data.data[0])
    a=data.nobelPrizes[i]
    row.innerHTML+=` 
    
    <div class="col-lg-4 col-md-4 col-sm-6 col-xl-4 p-3">
    <div  class="card border text-black  h-100 m-3" style="width: 18rem;">
        <div class="card-header text-center "> ${a.awardYear}<div>
            
            <div> <div class="card-body "> 
            <div class="card-text"> Category:${a.category.en}<br>
             Category Name:${a.categoryFullName.no}<br>
             Prize Amount:${a.prizeAmount}</div>
             <button onclick="Check('${a.categoryFullName.en}','ans${a.categoryFullName.no}')">Catogory Name</button>
<div id="ans${a.categoryFullName.no}"></div>
</div>
<div>

</div>
`




 
}

})

.catch((er)=>{
console.log("er")
})

function Check(a,m){
    // console.log(m)

document.getElementById(m).innerHTML=a;

}














    













