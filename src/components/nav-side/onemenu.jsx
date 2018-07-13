import React from 'react';
import {Link} from 'react-router-dom';


class Onemenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-div" style={{height:this.props.leftHeight+'px'}}>

                <div className="catList">
                    <ul className="clearfix">
                        {this.props.datas.map((item)=><li className="J_MenuItem" key={item.key}>
                                <div className={"itemmain-"+item.key} onMouseOver={()=>this.props.handletwoShow('block',item.key)} onMouseLeave={()=>this.props.handletwohid('none')}><Link to="/list">{item.name}</Link></div>
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        );
    }

}

export default Onemenu;