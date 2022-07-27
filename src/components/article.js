import { useEffect, useState } from "react";
import plus from "../repo/Union.png"
import playButton from "../repo/play.png"

function Article(props) {
  let width = props.w;
  let isDesktop = props.isDesktop;
  const [showMore,setShowMore] = useState(isDesktop)

  useEffect(() => {
    resize();
  },[width]);

  
  function resize(){
    if(width > 768){
      setShowMore(true);
    }
    else{
      setShowMore(false);
    }
  } 

  
  function handleClick(){
    setShowMore(true);
  }

  return (
    <div id="article">
      <h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi odio, mattis in ipsum quis, egestas rhoncus sapien. Aliquam lacinia vitae nibh blandit semper. Pellentesque congue, dui quis dictum tempor, diam magna bibendum erat, in tempus dui purus sit amet lectus.</p>
      <p>Aenean consectetur vulputate laoreet. Sed sed mauris pretium, convallis ex ac, rutrum purus. Quisque tempus sollicitudin mi ut pulvinar. Nulla congue erat enim, et consequat nisl pharetra egestas. Fusce nec lobortis tellus, non mattis dui. Nulla condimentum porta pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      {showMore &&
      <div style={{display:"flex",flexDirection:"column",margin:"0px"}}>
      <p>Aenean ornare rhoncus ullamcorper. Duis elementum malesuada ante eu gravida. Phasellus faucibus tincidunt molestie. Praesent feugiat bibendum ex, aliquet ultrices justo fringilla eget. Aliquam eget placerat tellus. Maecenas ac sollicitudin mauris, sit amet mollis dolor. Ut non semper odio, non blandit dui. Donec mollis sapien ac enim pretium, at interdum est vestibulum. Praesent porttitor, libero id commodo vestibulum, quam velit tristique magna, vitae commodo urna quam a sapien. Proin sed ipsum vel mauris ultrices fringilla. Fusce pulvinar ex massa, vitae pretium est aliquet sed. Suspendisse finibus nec ipsum ac ultricies. Phasellus interdum vulputate enim eget aliquet.</p>
      <p>Sed a mi pretium, posuere sem et, malesuada mauris. Vivamus ac sapien vel lectus cursus maximus vel vitae lacus. Praesent elementum mauris iaculis massa fringilla, vitae consequat turpis ullamcorper. Integer commodo sit amet massa id porta. Ut vehicula varius dui, sit amet semper mi malesuada vel. Nunc euismod sapien leo, sodales viverra ipsum lacinia venenatis. Mauris ac nunc neque. Nulla sed eros purus. Nullam non convallis justo, sit amet semper lorem. Maecenas sit amet tellus posuere, sollicitudin quam eu, sagittis lacus.</p>
      <p>Curabitur commodo congue consectetur. Maecenas condimentum ligula nunc, id varius tortor dictum vel. Vestibulum nisl nisl, laoreet sit amet aliquet eget, laoreet vel eros. Nulla facilisi. Sed sollicitudin augue vitae ligula ullamcorper, et fermentum felis egestas. Fusce egestas lacus ex, eu vulputate risus dapibus et. Cras et elementum augue. Suspendisse sit amet tristique libero. </p>
      </div>
      }
      <div>
        {!showMore &&
          <button onClick={handleClick}>YAZININ DEVAMI <img alt="" src={plus}></img></button>
        }
      </div>
      <video height="211"title="Video"></video>
    </div>
  );
}

export default Article;
