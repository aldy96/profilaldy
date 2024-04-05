function Navbar() { 

    const Menu =[
        {id:1, title:"HOME", url:'/Home'},
        {id:1, title:"BLOG", url:'/Blog'},
        {id:1, title:"ABOUT ME", url:'/About'},
        {id:1, title:"CONTACT", url:'/Contact'},

    ]

    return(
        <div className="w-screen h-full px-5 flex flex-col justify-around items-center md:grid md:grid-flow-col md:grid-cols-5 md:p-5">
            <div className=" w-full h-full flex justify-center items-center col-span-1">
                <span className=" font-mono font-extrabold text-justify items-center text-2xl md:text-3xl">ALDY FERNANDO</span>
            </div>
            <div className=" w-full h-full flex justify-center items-center col-span-4 
            p-2">
                <ul className=" md:p-5 w-full flex justify-around items-center neumorp1
                p-1">
                {Menu.map((menu)=>(
                    <li className="hover:text-cyan-500 text-sm md:text-md " key={menu.id}>
                        <a href={menu.url}>{menu.title}</a>    
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
 }

 export default Navbar