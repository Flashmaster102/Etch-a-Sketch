function createInitialGrid(dims=16)
{
   const container = document.querySelector(".container");
   
   for(let i=0;i<dims;i++)
	   for(let j=0;j<dims;j++)
	   {
		   const cell = document.createElement("div");
		   container.appendChild(cell);
	   }
	   
	container.style.gridTemplateColumns="repeat("+dims+",1fr)";
	   
	const myCells=document.querySelectorAll(".container div");
    for (let i = 0; i < myCells.length; i++) 
    {
      let item = myCells[i];
      item.addEventListener("mouseover", function() { this.style.backgroundColor="red"; });
    }
}

if(!document.getElementsByClassName(".container").hasChildNodes)
   createInitialGrid();


document.querySelector(".dimensions").addEventListener("click", function() 
                                                                {
                                                                    let mydims=prompt("Welcome.Please Dimensions for your grid!");
                                                                    if(!isNaN(mydims))
																	{
																	   removeAllChildren();
																	   createInitialGrid(parseInt(mydims));	
																	}
																	else
																		alert("Please enter a number from 1 to 100!");
																	
                                                                });

function removeAllChildren()
{
	const myContainer=document.querySelector(".container");
	let child=myContainer.lastElementChild;
	while (child) 
	{
            myContainer.removeChild(child);
            child = myContainer.lastElementChild;
    }
}