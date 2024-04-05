import Navbar from "./Navbar";
import foto from "../gambar/foto.png"

function Page1() {
  return (
    <div className = " h-screen w-screen text-cyan-100 flex items-center justify-center">
      <div className="grid grid-rows-6 w-screen h-screen ">
        <Navbar className="  row-span-1"/>
        <div className="w-full h-full p-5 row-span-5">
          <div className=" h-fit w-full flex justify-around neumorp1 flex-col md:flex-row md:h-full">
            
            <div className=" h-full w-full flex justify-center items-center ">
                <div>
                <div className=" h-full w-full p-5 md:pl-40" >
                  <p className=" text-2xl font-extrabold ">Hi, I'am ALDY </p>
                    <p>A Medical Doctor and Engineer</p>
                    <br />
                    <p className="opacity-50 text-justify">As a dedicated professional in both medicine and engineering, I am delighted to welcome you to my personal website. My journey as a doctor and engineer has been an enriching one, filled with diverse experiences and a passion for making a positive impact in people's lives.</p>
                </div>
                </div>
            </div>

            <div className="h-full w-full flex justify-center items-center">
                <img src={foto} alt="foto" className=" h-60 md:h-full" />
            </div>
         
          </div>  
        </div>
       </div>
    </div>
  );
}

export default Page1;
