import { SiteFooter } from "~/components/site-footer";
import SiteHeader from "~/components/site-header";
import Homepage from "~/ui/Homepage";

export default function Home() {

  return (
    <div>
      <SiteHeader />
      <Homepage/>
      <SiteFooter/>
    </div>
  );
}
