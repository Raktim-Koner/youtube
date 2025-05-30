const Button =()=>{


    const btnContent=["All","Indianarmy","React","News","Program","Computer Science","Chess","Live"]


    return(
        <div>
            {btnContent.map((item,index)=>{
                return(
                    <button className="h-auto w-auto p-3 bg-gray-600 rounded-xl mx-3 my-2 text-white" key={index}>{item}</button>
                )
            })}
            
        </div>
    )
}

export default Button;