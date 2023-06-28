const btn=document.querySelector(".btn");
const container=document.querySelector(".container");
const gridd=document.querySelectorAll('.grid');
btn.addEventListener('click',()=>{
    while (true){
            let grids=Number(prompt("How many  square grids do you need??"));
        if(grids>100 || grids<1){
            alert("Plz enter a number from 1-100");
        }else{
            const gridd=document.querySelectorAll('.grid');
            gridd.forEach((grid)=>{
                container.removeChild(grid);
            });
            boxes(grids);
            break;
        }
    }
});
let grid;
const boxes=(grids)=>{
    for(let i=1;i<=grids*grids;i++){
        grid=750/grids;
        const div=document.createElement("div");
        div.style.height=`${grid}px`;
        div.style.width=`${grid}px`;
        div.style.margin="0px 0px";
        div.classList.add('grid');
        container.appendChild(div);
    }
    const gridd=document.querySelectorAll('.grid');
    gridd.forEach((grid)=>{
        grid.addEventListener('mouseover',(e)=>{
            const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
            let code = "";
            for(let i=0; i<6; i++){
            code += hexArray[Math.floor(Math.random()*16)];
            }
            e.target.style.backgroundColor=`#${code}`;
        });
    });
}