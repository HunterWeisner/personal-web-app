console.log("script loaded buttons")

const buttonFunctions = {
    ExpandOnClick: (e)=>{
        console.log("button clicked");
        console.log(e.target.parentNode.parentNode.parentNode);
        // let details_div = e.target.parentNode.parentNode.getElementsByClassName("more-details-div")[0];
        // if(details_div.classList.contains("hidden")){
        //     details_div.classList.remove("hidden");
        // }else{
        //     details_div.classList.add("hidden");
        //}
        },      
    CollapseOnClick: (e)=>{
        let details_div = e.target.parentNode;
        details_div.classList.add("hidden")}
}

export default buttonFunctions;


