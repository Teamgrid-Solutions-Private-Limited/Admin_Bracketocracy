import React, { useState } from 'react'
import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import DA_Logo from "../../assets/da-logo-big.png";
import "./Login.css";
import { useDispatch, useSelector } from 'react-redux';
import {  getUsers } from '../redux/loginSlice';
const Login = () => {
const {status}=useSelector(state=>state.login)
const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const onSubmitAction=()=>{
	dispatch(getUsers({email,password}));
}
console.log(status,"status")
  return (
    <div className="login-page">
			<Container>
				<Row className="justify-content-center">
					<Col lg={8}>
						<div className="bg-white shadow rounded">
							<Row>
								<Col md={6}>
									<div className="form-left h-100 py-5 px-5">
										<h2 className="mb-4 text-uppercase">Login</h2>
										<p>Sign in to your account</p>
										<Form className="row g-4">
											<Col lg={12}>
												<div className="input-group flex-nowrap input-group-lg">
													<span className="input-group-text" id="addon-wrapping">
														<i className="bi bi-person"></i>
													</span>
													<Form.Control type="email" name="email" placeholder="name@example.com" 
                                                    value={email} onChange={(e) => setEmail(e.target.value)} 
                                                    />
												</div>
											</Col>
											<Col lg={12}>
												<div className="input-group flex-nowrap input-group-lg">
													<span className="input-group-text" id="addon-wrapping">
														<i className="bi bi-key"></i>
													</span>
													<Form.Control type="password" placeholder="Password" name="password" 
                                                    value={password} onChange={(e) => setPassword(e.target.value)} 
                                                        />
												</div>
											</Col>
											<Col xs={6}>
												{/* <Form.Check
                          type="checkbox"
                          id="rememberMe"
                          label="Remember me"
                        /> */}

												{/* <Link to="/recover-password" className="text-primary">
                          Forgot Password?
                        </Link> */}
											</Col>
											<Col xs={6}>
												<Button variant="dark" type="button" className="submit-btn px-4 float-end" 
                                                onClick={onSubmitAction}
                                                >
													Submit
												</Button>
											</Col>
										</Form>
									</div>
								</Col>
								<Col md={6} className="box-pattern">
									<h3>
										<span>BRACKETCRACY</span> <br /> ADMIN PANEL
									</h3>
								</Col>
							</Row>
						</div>
						<div className="poweredby">
							<span>Developed by</span> 
                            <Image src={DA_Logo} />
                            {" "}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
  )
}

export default Login