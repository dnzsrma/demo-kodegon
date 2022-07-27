import MobileCard from "./mobile-card";
import DesktopCard from "./desktop-card";
import img1 from "../repo/img-1.png";
import img2 from "../repo/img-2.png";
import img3 from "../repo/img-3.png";

function Links(props) {
  const articleInfos = [
    {
      image: img1,
      title : "Lorem ipsum",
      author : "Hüsnü Taner",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit magna dui, eget ultrices dui euismod in.",
      dates : "10.09.2020 - 10.10.2020",
    },
    {
      image: img2,
      title : "Nulla semper metus",
      author : "Mustafa Serkan Tiryaki ",
      content: "Nulla semper metus aliquam, condimentum odio vitae, sodales mauris. Donec congue leo eu libero ultricies tempor. Duis commodo lacus eget felis volutpat molestie. Sed at pharetra mauris. Ut eu lorem placerat, tempus velit in, feugiat libero.",
      dates : "10.09.2020 - 10.10.2020",
    },
    {
      image: img3,
      title : "Suspendisse tempus dignissim lacus ac tincidunt",
      author : "Kerim Değirmenci",
      content: "Nam semper sapien et erat molestie, a porttitor sem volutpat. Suspendisse tempus dignissim lacus ac tincidunt. Donec elementum pharetra orci, nec laoreet felis facilisis nec. Mauris ornare fermentum urna. Nunc non elit metus. Praesent sodales in nisi eget volutpat.",
      dates : "10.09.2020 - 10.10.2020",
    },
    {
      image: img1,
      title : "Integer dignissim",
      author : "Ebu Bekir Behram",
      content: "Integer nec vulputate libero. Donec at sollicitudin nibh. Nullam viverra egestas lorem, sed aliquet risus efficitur eu. Nunc tristique nisi ac massa finibus, sit amet blandit lectus suscipit. Mauris quis faucibus lorem. Integer dignissim condimentum orci, vitae pellentesque felis eleifend ac.",
      dates : "10.09.2020 - 10.10.2020",
    }
  ]
  let isDesktop = props.isDesktop;

  let cards = articleInfos.map((article,index) => <MobileCard package={article} key={index}/>)
  if(isDesktop){
    articleInfos.push(articleInfos[2]);
    articleInfos.push(articleInfos[3]);
    cards = articleInfos.map((article,index) => <DesktopCard key={index} package={article}/>)
  }
    return (
      <div id="links">
        <h2>Suspendisse Tempus</h2>
        <div className="links-grid-container">
          {cards}
        </div>
      </div>
    );
  }
  
  export default Links;