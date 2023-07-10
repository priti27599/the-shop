import Link from "next/link";
import { Icons } from "./icons";
import News from "./News";

const data = [
  {
    title: "Credits",
    arr:['OneStopShop','Acme Corp','shadcn/ui','Taxonomy']
  },
  {
    title: "Help",
    arr:['About','Contact','Terms','Privacy']
  },
  {
    title: "Social",
    arr:['Twitter','Github','Discord','cal.com']
  },
  {
    title: "Lofi",
    arr:['beats to study to','beats to chill to','a fresh start','coffee to go']
  },
]

export function SiteFooter() {
  return (
    <footer className="w-full bg-background border-t py-6 ">
      <div >
        <div className="lg:flex lg:justify-between">
        <div>
        <Link href="/" className='flex items-center space-x-2 px-4 lg:py-2'>
        <Icons.logo className='h-6 w-6'/>
                <span className=' font-bold sm:inline-block'>Skateshop13</span>
               
     </Link>
        </div>
        <div className="flex flex-wrap lg:w-[50%]">
          {
            data.map((item) => {
              return (
                <div className=" w-[40%] px-5 py-6 lg:w-[25%] lg:py-1 lg:px-2">
                  <h3 className="py-2 text-lg font-semibold">{item.title}</h3>
                  <ul>
                    {
                      item.arr.map((it) => (
                        <li className="text-zinc-500 py-2 text-sm ">{it}</li>
                      ))
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      <News/>
        </div>
       
      <div className="container flex flex-col items-center justify-between space-y-1  py-5 sm:h-16 sm:flex-row sm:py-0">
         <div className="text-center text-sm text-muted-foreground sm:text-base mx-4 text-slate-500">
            Build by{" "}  
            <a href="/" className="font-semibold transition-colors hover:text-black ">
                Priti     
            </a>      
         </div>  
        <div className="flex items-center space-x-1">
            <Link href="/" target="_blank">
                <div className="w-9 px-0 mx-5">
                  <Icons.gitHub className="h-5 w-5" />
                  <span className="sr-only">Github</span>        
                </div>      
            </Link>     
        </div>     
      </div>
      </div> 
    </footer>
  );
}