import {  useState } from 'react'

export default (inputsInitialState, onSubmit) => {

    const [inputs, setInputs] = useState(inputsInitialState)

    const updateInputswithNewState = formElement => value => {
        // formElement: email or password
        // value: the current value in the formElemtn. this funcion gets that value because it is called through the event onChangeText, therefore it automatically receives the formEement value.
        // onChangeText={subscribe('email')}

        setInputs({ ...inputs, [formElement]: value})
        //it makes a copy of the object inputs properties and updates juest the form element we pass when we call the function (email or password) and assign to it the new value.
    }

    const handleSubmit = () => {
        //llamar a un submit con los valores de los cambios.
        onSubmit(inputs)
    }

    return { updateInputswithNewState,  inputs, handleSubmit }
    
}