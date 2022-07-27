import arrow from "../repo/Arrow.png"

function DesktopCard(props) {
    return (
      <div className="card">
        <img alt="" className="links-image" src={props.package.image}></img>
            <h5>{props.package.title}</h5>
            <p className="writer-name">{props.package.author}</p>
            <p className="links-content">{props.package.content}</p>
            <div>
                <p className="article-dates">{props.package.dates}</p>
                <img className="links-arrow" alt="" src={arrow}></img>
            </div>
      </div>
    );
  }
  
  export default DesktopCard;