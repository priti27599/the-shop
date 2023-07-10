import React,{useState} from 'react';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { Icons } from './icons';
import { CaretDownIcon } from '@radix-ui/react-icons';


const MainNav = () => {
    let [open, setOpen] = useState(false);
    return (
        <div className='flex'>
            <div className = {`absolute top-[15px] z-10 lg:hidden ${open ? 'hidden':'block'}`} onClick={()=>setOpen(!open)}>
               <Icons.menu/>
            </div>
         <div className={`bg-white lg:bg-none flex mx-0  lg:flex-row py-5 lg:py-0 relative min-h-[100vh]  left-0 flex-col lg:min-h-fit lg:static lg:top-[5px] ${open? 'top-[240px] ': 'top-[-370px]'}`}>
             
          <div className={`absolute left-[370px] z-10 lg:hidden`} onClick={()=>setOpen(!open)}>
            <Icons.close/>
          </div>
      <Link href="/" className='flex items-center space-x-2 px-4'>
        <Icons.logo className='h-6 w-6'/>
                <span className=' font-bold sm:inline-block'>Skateshop13</span>
               
     </Link>
    <NavigationMenu.Root className="relative z-[1] flex flex-col lg:flex-row ">
    <NavigationMenu.List className="center m-0 flex list-none p-1 flex-col lg:flex-row">
      <NavigationMenu.Item className='px-2 py-4'>
        <NavigationMenu.Trigger className=" hover:bg-gray5 focus:shadow-gray4 group flex select-none items-center justify-between gap-[300px] lg:gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
          Learn{' '}
          <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="bg-white border border-slati-400 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto">
          <ul className=" one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
            <li className="row-span-3 grid">
              <NavigationMenu.Link asChild>
                <a
                  className="focus:shadow-gray7 from-gray9 to-gray9 flex
                  h-full w-full select-none flex-col justify-end rounded-[6px] bg-grey p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                  href="/"
                >
                    <Icons.logo className='h-6 w-6'/>                        
                  <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                    Skateshop 13
                  </div>
                  <p className="text-mauve4 text-[14px] leading-[1.3]">
                    An open source e-commerce skateshop build with everything new in Next.js 13.
                  </p>
                </a>
              </NavigationMenu.Link>
            </li>

            <ListItem href="https://stitches.dev/" title="Products">
            All the products we have to offer.
            </ListItem>
            <ListItem href="/colors" title="Build a Board">
              Build your own custom skateboard. 
            </ListItem>
            <ListItem href="https://icons.radix-ui.com/" title="Blog">
            Read our latest blog posts.
            </ListItem>
          </ul>
        </NavigationMenu.Content>

                 
       </NavigationMenu.Item>
        <hr/>      

      <NavigationMenu.Item className='px-2 py-4'>
        <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between  gap-[247px] lg:gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
          Skatesboards{' '}
         <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
          <ul className=" bg-white m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-4">
            <ListItem title="All" href="/docs/primitives/overview/introduction">
            All skateboards.
            </ListItem>
            <ListItem title="Wheels" href="/docs/primitives/overview/getting-started">
            The wheels that go in the wheels.
            </ListItem>
            <ListItem title="Bearings" href="/docs/primitives/guides/styling">
            The bearings that go in the wheels.
            </ListItem>
            <ListItem title="Hardware" href="/docs/primitives/guides/animation">
            The hardware that goes on the board.
            </ListItem>
            <ListItem title="Decks" href="/docs/primitives/overview/accessibility">
            The board itself.
            </ListItem>
            <ListItem title="Trucks" href="/docs/primitives/overview/releases">
            The trucks that go on the board.
            </ListItem>
            <ListItem title="Griptape" href="/docs/primitives/overview/releases">
            The griptape that goes on the board.
            </ListItem>
            <ListItem title="Tools" href="/docs/primitives/overview/releases">
            The tools that go with the board.
            </ListItem>
          </ul>
        </NavigationMenu.Content>
    </NavigationMenu.Item>
    <hr/>               

    <NavigationMenu.Item className='px-2 py-4'>
        <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between  gap-[280px] lg:gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
          Clothing{' '}
         <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
          <ul className=" bg-white m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
            <ListItem title="All" href="/docs/primitives/overview/introduction">
             All clothing.
            </ListItem>
            <ListItem title="Hoodies" href="/docs/primitives/overview/getting-started">
            Cozy up in trendy hoodies.
            </ListItem>
            <ListItem title="Shorts" href="/docs/primitives/guides/styling">
            Stay cool with casual and confortable shorts.
            </ListItem>
            <ListItem title="T-shirts" href="/docs/primitives/guides/animation">
            Cool and comfy tees for effortless style.
            </ListItem>
            <ListItem title="Pants" href="/docs/primitives/overview/accessibility">
            Relaxed and stylish pants for everyday wear.
            </ListItem>
            <ListItem title="Hats" href="/docs/primitives/overview/releases">
            Top off your look with stylish and laidback hats.
            </ListItem>
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>                
      <hr/> 
                    
      <NavigationMenu.Item className='px-2 py-4'>
        <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between  gap-[297px] lg:gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
          Shoes{' '}
         <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
          <ul className=" bg-white m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
            <ListItem title="All" href="/docs/primitives/overview/introduction">
             All shoes.
            </ListItem>
            <ListItem title="High Tops" href="/docs/primitives/overview/getting-started">
             Elevate your style with rad high top shoes.
            </ListItem>
            <ListItem title="Pros" href="/docs/primitives/guides/styling">
             Performance-driven rad shoes for the pros.
            </ListItem>
            <ListItem title="Low Tops" href="/docs/primitives/guides/animation">
            Rad low tops shoes for a stylish low-profile look.
            </ListItem>
            <ListItem title="Slip-ons" href="/docs/primitives/overview/accessibility">
            Effortless style with rad slip-on shoes.
            </ListItem>
            <ListItem title="Classics" href="/docs/primitives/overview/releases">
            Timeless style with rad classic shoes.
            </ListItem>
          </ul>
        </NavigationMenu.Content>
        </NavigationMenu.Item>  
        <hr/> 

      <NavigationMenu.Item className='px-2 py-4'>
        <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between  gap-[258px] lg:gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
          Accessories{' '}
         <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="absolute top-0 left-0 w-20 sm:w-auto">
          <ul className=" bg-white m-0 grid list-none gap-x-[10px] px-[29px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-4">
            <ListItem title="All" href="/docs/primitives/overview/introduction">
              All accessories.
            </ListItem>
            <ListItem title="Bushings" href="/docs/primitives/overview/getting-started" >
              Upgrade your ride with our rad selection of bushings.
            </ListItem>
            <ListItem title="Skate Rails" href="/docs/primitives/guides/styling">
               Add creativity and style to your tricks with our rad skate rails.
            </ListItem>
            <ListItem title="Socks" href="/docs/primitives/guides/animation" >
              Keep your feet comfy and stylish with our rad socks.
            </ListItem>
            <ListItem title="Skate Tools" href="/docs/primitives/overview/accessibility">
              Essential tools for maintaining your skateboard, all rad.
            </ListItem>
            <ListItem title="Shock & Riser Pads" href="/docs/primitives/overview/releases">
              Enhance your skateboard's performance with rad shock and riser pads.
            </ListItem>
            <ListItem title="Wax" href="/docs/primitives/overview/releases">
              Keep your board gliding smoothly with our rad skate wax.
            </ListItem>
            <ListItem title="Backpacks" href="/docs/primitives/overview/releases">
              Carry your gear in style with our rad backpacks.                      
            </ListItem>
          </ul>
        </NavigationMenu.Content>
               
      </NavigationMenu.Item>

      <hr/>             
      <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
        <div className="relative top-[60%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
      </NavigationMenu.Indicator>
      </NavigationMenu.List>

     <div className="absolute top-full left-0 flex  justify-center">
      <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
     </div>
    </NavigationMenu.Root>
  </div>
</div>
);
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
<li>
  <NavigationMenu.Link asChild>
    <a
      className={classNames(
        'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-zinc-800 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">{title}</div>
      <p className="text-xs leading-[1.4] text-zinc-400">{children}</p>
    </a>
  </NavigationMenu.Link>
</li>
));


export default MainNav