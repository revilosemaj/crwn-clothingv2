import React from 'react'
import {
    GroupContainer,
    GroupInput,
    InputLabel
} from './form-input.styles'

const FormInput = ({ label, handleChange, ...otherProps }) => {
    return (
        <GroupContainer>
            <GroupInput
                onChange={handleChange}
                {...otherProps}
                />    
            {
                label ?
                <InputLabel {...otherProps} >
                    {label}
                </InputLabel>
                : null
            }
        </GroupContainer>
    )
}

export default FormInput
