
import Button from "../Atom/Button";

export default function Taskey() {
  return (
    <section className=" bg-blue-950 py-20 text-center my-24">
    
        
         <div className="text-center max-w-4xl mx-auto">
               <h1 className="text-6xl font-bold text-white">
                  Your work, everywhere you are
               </h1>
               <p className="text-gray-200 mt-4 ">
                 Access your notes from your computer, phone, or tablet by synchronizing
                 with various services, including Whitepace, Dropbox, and OneDrive. The
                 app is available on Windows, macOS, Linux, Android, and iOS. A terminal
                 app is also available!
               </p>
         </div> 


        <div className="mt-12">
          <Button>Try Taskey</Button>
        </div>
      
    </section>
  );
}


