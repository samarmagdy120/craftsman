import Axios from 'axios'
import React , { Component }from 'react'
import {Jumbotron, Container, Button, Modal, InputGroup, FormControl} from 'react-bootstrap'
import './Services.css'


class Services extends Component{

    

    handleShow(){
        this.setState({show:true})
    }
    handleClose(){
        this.setState({show:false})
    }

    
    
    state = {
        works:[]
    }
    componentDidMount = () => {
        Axios.get('js/data.json').then(res => {this.setState({works: res.data.works})})
    }

    

    render(){

        const worksList = this.state.works.map( (workItem) =>{
            return(
                        <React.Fragment>
                            <div className="product">
                                <div className="imgbox">
                                    <img src={workItem.image_body} alt="watch" />
                                </div>
                                <div className="content">
                                    <h2>{workItem.title}</h2><br />
                                    
                                <Button onClick={() =>{this.handleShow()}}>اطلب الان</Button>

                                <Modal show={this.state.show} >
                                    <Modal.Header>ادخال بيانات</Modal.Header>
                                    <Modal.Body>


                                        
                                    <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>الاسم الاول والاسم الاخير</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl />
                                    <FormControl />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="ادخل البريد الالكتروني"
                                        aria-label="ادخل البريد الالكتروني"
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={() =>{this.handleClose()}}>
                                            Close Modal
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                </div>
                            </div>
                        </React.Fragment>
                   
            )
        })
    
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <Container>
                        <h2>صنايعي خبره : خدمتنا</h2>
                        <p>
                        صنايعي خبره هو بوابة اى حرفه , وعشان نضمن اننا نكون حلقة وصل فعالة اعتمدنا على تحقيق الفرص للصنايعي والعميل
                        </p>
                        <hr/>
                    </Container>
                </Jumbotron>
                <div className="work">
                <div className="container">
                    {worksList}
                </div>
            </div>
            </React.Fragment>
            
        )
    }
    
    
}
export default Services