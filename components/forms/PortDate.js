import React from "react"
import DatePicker from "react-datepicker"
import { FormGroup, Label, Button } from 'reactstrap'

import "react-datepicker/dist/react-datepicker.css"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class PortDate extends React.Component {
    constructor(props){
        super(props)

        const dateValue = props.initialDate ? new Date(props.initialDate) : new Date()

        this.state = {
            dateValue
        }
    }
   
    setFieldAndTouched = (date, touched) => {
        const { setFieldValue, setFieldTouched } = this.props.form
        const { name } = this.props.field

        setFieldValue(name, date, true)
        setFieldTouched(name, touched, true)
    }

    handleChange = date => {
        this.setState({
            dateValue: date,
            isHidden: false
        })

        this.setFieldAndTouched(date, true)
    }

    toggleDate = (date) => {

        this.setState({
            isHidden: !this.state.isHidden
        })

        this.setFieldAndTouched(date, true)
    }

    render() {
        const { canBeDisabled, label, field, form: { touched, errors } } = this.props
        const { isHidden, dateValue } = this.state

        return (
            <FormGroup>
                <Label>{label}</Label>
                <div className='input-group'>
                    {!isHidden &&
                        <DatePicker
                            selected={dateValue}
                            onChange={this.handleChange}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            maxDate={new Date()}
                            dropdownMode="select"
                        />
                    }
                </div>
                {canBeDisabled && !isHidden && <Button onClick={() => this.toggleDate(null)}>Still Working Here...</Button>}

                {canBeDisabled && isHidden &&
                    <React.Fragment>
                        <span> Still Working Here </span>
                        <Button onClick={() => this.toggleDate(dateValue)}> Set End Date </Button>
                    </React.Fragment>
                }



                {touched[field.name] &&
                    errors[field.name] && <div className="error">{errors[field.name]}</div>}
            </FormGroup>
        )
    }
}

export default PortDate