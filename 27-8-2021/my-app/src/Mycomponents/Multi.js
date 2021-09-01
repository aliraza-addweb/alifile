import React, { useState } from 'react'
import { Card, CardContent } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { mixed, number, object } from 'yup';
export default function Multi() {

    return (
        <Card>
            <CardContent>
                <FormikStepper
                    validationSchema={object({
                        money: mixed().when('checked', {
                            is: true,
                            then: number().required().min(1_00_000, 'because you said you'),
                            otherwise: number().required()

                        })
                    })}
                    initialvalues={{
                        firstName: '',
                        lastName: '',
                        checked: false,
                        money: 0,
                        description: '',
                    }} onSubmit={() => { }}>
                    
                        <FormikStep>
                            <Field name="firstName" component={TextField} label="First Name" />
                            <Field name="lastName" component={TextField} label="Last Name" />
                            <Field name="millionaire" type="checkbox" component={CheckboxWithLabel} Label={{ label: 'i am millionaire' }} />
                        </FormikStep>
                        <FormikStep>
                            <Field name="money" type="number" component={TextField} label="All the money" />
                        </FormikStep>
                        <FormikStep>
                            <Field name="description" component={TextField} label="Description" />
                        </FormikStep>
                    
                </FormikStepper>
            </CardContent>
        </Card>
    );
}

// export interface FormikStepProps extends pick<FormikConfig<FormikValues> , 'children' | 'validationSchema' >{

// }

export function FormikStep({ children, ...props } ) {
 
    return <>{children}</>
}
export function FormikStepper({ children, ...props}){
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];

    function islastStep() {
        return step === childrenArray.length - 1;
    }

    return (
    <Formik
    {...props} onSubmit={async(values, helpers) =>{
        if(islastStep()){
            await props.onSubmit(values, helpers);
        }
        else
        {
            setStep((s) => s + 1);
        }
    }}>
    <Form autoComplete="off">{currentChild}
    {step > 0 ? <button onClick={() => setStep((s) => s - 1)}>Back</button>  : null}
    <button type="submit" >{islastStep() ? 'Submit' : 'Next'}</button>
    </Form>    
    </Formik>
    ) 
}
