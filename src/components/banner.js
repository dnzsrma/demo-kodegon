import bannerImage from "../repo/Banner.png"

function Banner() {
  return (
    <div>
      <header id="banner">
        <img alt="Banner" src={bannerImage}></img>
      </header>
    </div>
  );
}

export default Banner;
