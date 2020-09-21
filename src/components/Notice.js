import React, {Component} from 'react';
import './style.css';
class Notice extends Component{
    render(){
        let thongBao = this.props.thongBao;
        if(thongBao === true){
            return(
                <div className="Notice">
                    <i className="far fa-bell"></i>
                    <div className="red"></div>
                </div>
            );
        }
        else{
            return(
                <div className="Notice">
                    <i className="far fa-bell"></i>
                </div>
            );
           
        }
    }
}

export default Notice;