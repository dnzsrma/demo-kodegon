

function Navbar() {

    function onFocus(e){
        Array.from(document.getElementsByTagName("li")).map(a=>a.classList.remove("focusedLi"))
        document.getElementsByTagName("li")[e.target.value].classList.add("focusedLi")
    }

    return (
        <div id="navbar">
            <ul>
                <li value={0} className="focusedLi" onClick={onFocus}>Lorem Ipsum</li>
                <li value={1} onClick={onFocus}>Dolor Sit Amet</li>
                <li value={2} onClick={onFocus}>Consectetur adipiscing</li>
            </ul>
        </div>
    );
}

export default Navbar;
