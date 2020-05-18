import React, {useState} from "react";
import * as yup from "yup";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//Yup Validation
const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is a required field"),
    pizzaSize: yup
        .string()
        .required("Must Select a Pizza Size"),
    sausage: yup
        .string(),
    pepperoni: yup
        .string(),
    bacon: yup
        .string(),
    veggies: yup
        .string(),
    special: yup
        .string()
})

//Set state
export default function OrderForm() {
    const [formState, setFormState] = useState({
        name: "",
        pizzaSize: "",
        sausage: false,
        pepperoni: false,
        bacon: false,
        veggies: false,
        special: ""
    });

    const [post, setPost] = useState()

    const [errorState, setErrorState] = useState({
        name: "",
        pizzaSize: "",
        sausage: "",
        pepperoni: "",
        bacon: "",
        veggies: "",
        special: ""
    });

    const validate = e => {
        let value = 
        e.target.type ==="checkbox" ? e.target.checked : e.target.value;
        yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState, [e.target.name]: ""
                });
            }) 
            .catch(err => {
                console.log(err.errors)
                setErrorState({
                    ...errorState,
                    [e.target.name] : err.errors[0]
                });
            });
    };

    const inputChange = e => {
        e.persist();

        validate(e)
        let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({...formState, [e.target.name]: value});
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!")
        
        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => { 
                  setPost(response.data);
                  console.log("Success", response)
                })
            .catch(err => console.log("Error! Resubmit your form please!",err));
    setFormState({name: "", pizzaSize: "", sausage: false, pepperoni: false, bacon:false, veggies:false, special: ""})
    };

    return (
        //Form Start
      <Form onSubmit={formSubmit}>


      <FormGroup>
        <Label for="nam">Name:</Label>
        <Input  type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={inputChange} />
                    
      </FormGroup>


      <FormGroup>
        <Label for="pizzaSize">Select Pizza</Label>
        <Input type="select"  
                    value={formState.pizzaSize}
                    name="pizzaSize"
                    id="pizzaSize"
                    onChange={inputChange}>
          <option value="" disabled={true}>Please Select Pizza Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
        </Input>
      </FormGroup>
    
      
      <FormGroup check>
        <Label check>
          <Input  name="pepperoni"
                    type="checkbox"
                    checked={formState.pepperoni}
                    onChange={inputChange} />{' '}
          pepperoni
        </Label>
        <Label check>
          <Input  name="bacon"
                    type="checkbox"
                    checked={formState.bacon}
                    onChange={inputChange} />{' '}
          bacon
        </Label>
        <Label check>
          <Input  name="sausage"
                    type="checkbox"
                    checked={formState.sausage}
                    onChange={inputChange} />{' '}
          Sausage
        </Label>
        <Label check>
          <Input  name="veggies"
                    type="checkbox"
                    checked={formState.veggies}
                    onChange={inputChange} />{' '}
          veggies
        </Label>
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Special Instructions:</Label>
        <Input type="textarea" 
        id="special"
                    name="special"
                    value={formState.special}
                    onChange={inputChange} />
      </FormGroup>
     

      <Button>Submit</Button>


    </Form>

    )
}