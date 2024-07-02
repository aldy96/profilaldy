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
                <ul className=" md:p-5 w-full flex justify-around items-center 
                p-1 h-full bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 neumorp1 ">
                {Menu.map((menu)=>(
                    <li className=" hover:text-white text-sm md:text-md " key={menu.id}>
                        <a href={menu.url}>{menu.title}</a>    
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
 }

 export default Navbar