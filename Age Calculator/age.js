let inputBtn= document.querySelector("#age-dob");
let btn= document.querySelector(".btn1");
let ageResult= document.querySelector(".result");

btn.addEventListener("click",()=>{
    if(inputBtn.value===""){
        alert("please select DOB");
    }
    else{
       
        let dob = new Date(inputBtn.value);
        let dob_year = dob.getFullYear();
        console.log(dob_year);

        // current year
        let current=new Date();
        console.log(current);
        let current_year= current.getFullYear();
        console.log(current_year);

        let age=current_year- dob_year;
        console.log(age);

        ageResult.textContent=`Your Age is:${age}`;
    

        

        
    
    }
})