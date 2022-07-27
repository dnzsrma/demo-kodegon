import arrow from "../repo/Arrow.png"

function MobileCard(props) {
    return (
      <div className="card">
        <img alt="" className="links-image" src={props.package.image}></img>
        <div>
            <h5>{props.package.title}</h5>
            <p className="writer-name">{props.package.author}</p>
            <p className="article-dates">{props.package.dates}</p>
            <img className="links-arrow" alt="" src={arrow}></img>
        </div>
      </div>
    );
  }
  
  export default MobileCard;