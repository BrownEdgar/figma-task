import { object, string } from "yup"

export const initialValue = {
    username : '',
    email : '',
    password : ''
}

export const validationSchema = object({
    username : string().min(3, 'Ամենաքիչը երեք տառ').matches(/^[A-Za-z]+(?:[-\s][A-Za-z]+)*$/).required('Պարտադիր է'),
    email : string().email().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required('Պարտադիր է'),
    password : string().min(6).max(15).matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/).required('Պարտադիր է')
})