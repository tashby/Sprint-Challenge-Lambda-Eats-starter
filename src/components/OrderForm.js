import React, {useState} from "react";
import * as yup from "yup";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText, Badge } from 'reactstrap';

//Yup Validation
const formSchema = yup.object().shape({
    name: yup.string().min(2, "Minimum 2 characters").required("Name is required"),
    size: yup.string().required("Select a Size"),
    meatball: yup.string(),
    pepperoni: yup.string(),
    chicken: yup.string(),
    veggies: yup.string(),
    notes: yup.string()
})

//Set state
export default function OrderForm() {
    //adding in order post to top
    const [order, setOrder] = useState()

    //setting initial form and error state
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        meatball: false,
        pepperoni: false,
        chicken: false,
        veggies: false,
        notes: ""
    });

    const [errorState, setErrorState] = useState({
        name: "",
        size: "",
        meatball: "",
        pepperoni: "",
        chicken: "",
        veggies: "",
        notes: ""
    });

    //Validation
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
//ChangeHandle
    const inputChange = e => {
        e.persist();
        validate(e)
        let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({...formState, [e.target.name]: value});
    };
//Axios and Post data to reqres
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!")
        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => {setOrder(response.data);
                  console.log(response)
                })
            .catch(err => console.log("Error! Resubmit your form please!",err));
            setFormState(
                {name: "", 
                size: "", 
                meatball: false, 
                pepperoni: false,
                 chicken:false, 
                 veggies:false, 
                 notes: ""})
    };

    return (
        //Form Start
      <Form onSubmit={formSubmit}>


      <FormGroup>
        <Label for="name">Name:</Label>
        <Input  type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={inputChange} />        
      </FormGroup>


      <FormGroup>
        <Label for="size">Select a Size</Label>
        <Input type="select"  
                    value={formState.size}
                    name="size"
                    id="size"
                    onChange={inputChange}>
          <option value="" disabled={true}>Please Select a Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
        </Input>
      </FormGroup>
    
      
      <FormGroup check>
      <Badge color="danger">Pepperoni</Badge>
        <Label check>
          <Input  name="pepperoni"
                    type="checkbox"
                    checked={formState.pepperoni}
                    onChange={inputChange} />{' '}
        </Label>
        <Badge color="warning">Chicken</Badge>
        <Label check>
          <Input  name="chicken"
                    type="checkbox"
                    checked={formState.chicken}
                    onChange={inputChange} />{' '}
        </Label>
        <Badge color="secondary">Meatball</Badge>
        <Label check>
          <Input  name="meatball"
                    type="checkbox"
                    checked={formState.meatball}
                    onChange={inputChange} />{' '}
        </Label>
        <Badge color="success">Veggies</Badge>
        <Label check>
          <Input  name="veggies"
                    type="checkbox"
                    checked={formState.veggies}
                    onChange={inputChange} />{' '}
        </Label>
      </FormGroup>
        <br></br>
      <FormGroup>
        <Label for="exampleText">Notes:</Label>
        <Input type="textarea" 
        id="notes"
                    name="notes"
                    value={formState.notes}
                    onChange={inputChange} />
      </FormGroup>
     

      <Button type="submit">Submit</Button>
      

    </Form>

    )
}