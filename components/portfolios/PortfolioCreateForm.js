// Render Prop
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Alert } from 'reactstrap'
import PortInput from '../forms/PortInput'
import PortDate from '../forms/PortDate'

const validateInputs = (values) => {
    const errors = {}

    Object.entries(values).forEach(([key, value]) => {
        if (!values[key] && key !== 'endDate')
            errors[key] = `Field ${key} is required!`
    })

    const startDate = new Date(values.startDate)
    const endDate = new Date(values.endDate)

    if (startDate && endDate && endDate.getTime() < startDate.getTime())
        errors.endDate = 'End Date cannot be before Start Date!'

    return errors
}

const PortfolioCreateForm = ({ initialValues, onSubmit, error }) => (
    <div>
        <Formik
            initialValues={initialValues}
            validate={validateInputs}
            onSubmit={onSubmit}>
            {
                ({ isSubmitting }) => (
                    <Form>
                        <Field
                            label="Title"
                            type="text"
                            name="title"
                            component={PortInput} />

                        <Field
                            label="Company"
                            type="text"
                            name="company"
                            component={PortInput} />

                        <Field
                            label="Location"
                            type="text"
                            name="location"
                            component={PortInput} />

                        <Field
                            label="Position"
                            type="text"
                            name="position"
                            component={PortInput} />

                        <Field
                            label="Description"
                            type="textarea"
                            name="description"
                            component={PortInput} />

                        <Field
                            label="Start Date"
                            name="startDate"
                            initialDate={initialValues.startDate}
                            component={PortDate} />

                        <Field
                            label="End Date"
                            name="endDate"
                            canBeDisabled={true}
                            initialDate={initialValues.endDate}
                            component={PortDate} />

                        {error &&
                            <Alert color='danger'>
                                {error}
                            </Alert>
                        }

                        <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
                            Create
                        </Button>
                    </Form>
                )
            }
        </Formik>
    </div>
);

export default PortfolioCreateForm;

// import React from 'react'

// export default class PortfolioCreateForm extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             title: '',
//             description: '',
//             language: ''
//         }
//     }

//     handleChange = event => {
//         const field = event.target.name
//         this.setState({ [field]: event.target.value })
//     }

//     handleSubmit = event => {
//         alert('>>>: ' + this.state.title + "-" + this.state.description + '-' + this.state.language)
//         event.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <Label>
//                     Name:
//                     <input
//                         name="title"
//                         type="text"
//                         value={this.state.value}
//                         onChange={this.handleChange} />
//                 </Label>
//                 <Label>
//                     Description:
//                     <textarea
//                         name="description"
//                         value={this.state.description}
//                         onChange={this.handleChange} />
//                 </Label>
//                 <Label>
//                     Pick you favorite Programming Language:
//                     <select
//                         name="language"
//                         value={this.state.language}
//                         onChange={this.handleChange}>
//                         <option value="javascript">Javascript</option>
//                         <option value="react_js">React.js</option>
//                         <option value="react_native">React native</option>
//                         <option value="node">Node.js</option>
//                         <option value="next">Next.js</option>
//                     </select>
//                 </Label>
//                 <input type="submit" value="Enviar" />
//             </form>
//         );
//     }
// }
