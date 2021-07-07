import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import Pizza from '../img/Pizza.jpg'

export default function HomePage() {
    return (
        <div> 
            <div>
            <Card>
        <CardImg top width="100%" src={Pizza} alt="PizzaHeader" />
        <CardBody>
          <CardTitle>Best Pizza Place!</CardTitle>
          <CardSubtitle>The fastest Delivery!</CardSubtitle>
          <CardText>Place your order now!</CardText>
          <nav>
                    <a href="/"><Button color="primary">Home</Button></a>
                    <br></br>
                    <a href="/pizza"><Button color ="danger">Order Form</Button></a>
                </nav>
        </CardBody>
      </Card>
               
            </div>
        </div>
    )
}