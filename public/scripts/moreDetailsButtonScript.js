const buttonFunctions = {
    ExpandOnClick: (e)=>{
        let details_div = e.target.closest('div').parentNode.getElementsByClassName("more-details-div")[0];
        if(details_div.classList.contains("hidden")){
            console.log(e.target);
            e.target.classList.add('expanded');
            details_div.classList.remove("hidden");
            details_div.setAttribute('aria-expanded', 'true');
        }else{
            e.target.classList.remove('expanded');
            details_div.classList.add("hidden");
            details_div.setAttribute('aria-expanded', 'false');
        }
        },      
    CollapseOnClick: (e)=>{
        let details_div = e.target.parentNode;
        details_div.classList.add("hidden")
        details_div.setAttribute('aria-expanded', 'false');
    }
}

export default buttonFunctions;


