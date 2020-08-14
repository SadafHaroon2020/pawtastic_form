import React from 'react';

function Sidebar (){
    return (
    <div className = "title">
        <h2 className = "nav">Pawtastic</h2>
        <ul className = "side_list">
            <li>Human profile</li>
            <li>Pet basics</li>
            <li>Pet details</li>
            <li>Confirm</li>
        </ul>
        <img className="dog"  src = "https://static.thebark.com/sites/default/files/styles/medium/public/content/article/thumb/wolfdogs2.jpg?itok=XU1_Wqqs" width= "250pt" height="250pt" />
        <br/>
        <button className="save_button">Save & Exit</button>
    </div>
    );
}
export default Sidebar;