import React from 'react';
import {Link} from 'react-router-dom';

class Twomenu extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const menudata = this.props.datas.filter((menu)=>{return menu.key===this.props.menukey;});
        return (
            <div className="cat-subcategory" style={{display:this.props.dptwo,top:this.props.showTop}}>
                <i className="item-jt1"></i>
                <div className="shadow">
                    {menudata.map((item)=>
                        <div className="entity-main" style={{width:150+"px"}} key={item.key}>
                            <Twomenushow item={item} />
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

class Twomenushow extends  React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <ul className="shadow-left">
                {this.props.item.child.map((tmenu)=><li key={tmenu.key}><Link to="#" className="secItem" >{tmenu.name}</Link></li>)}
            </ul>
        );
    }
}


export default Twomenu;