import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import swal from 'sweetalert';

class SwalDoc extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ocr: this.props.value,
            txtSize: 0
        }
        this.img = this.props.img
        this.n = this.props.n
        this.ref = React.createRef();
    }

    changeHandler = (e) => {
        this.setState({ ocr: e.target.value })
        this.props.changeHandler(e)
    }

    getMeta(url) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(Math.floor(img.height / 51));
            img.onerror = () => reject();
            img.src = url;
        });
    }

    componentDidMount = async () => {
        // let tamanho = await this.getMeta(this.img)
        let tamanho = Math.floor(this.ref.current.offsetHeight / 23)
        this.setState({ txtSize: tamanho })
    }

    render() {
        return (
            <>
                <div>
                    <img src={this.img} style={{ maxHeight: "775px", maxWidth: "565px", verticalAlign: "unset" }} ref={this.ref} />
                    <textarea name={`ocr_${this.n}`} rows={this.state.txtSize} cols="50" value={this.state.ocr} onChange={this.changeHandler} />
                    <div
                        className="swal2-actions"
                        style={{ display: "flex", fontSize: "0.9em" }}
                    >
                    </div>
                </div>
            </>
        )
    }
}

export default SwalDoc