import React,{useState} from 'react'

import './FormComponents/app.css'
import FormTrue from './FormComponents/FormTrue'
function AppForm() {
const [formValue, setFormValue] = useState({name:'',email:'',password:''})
const [FormError, setFormError] = useState({})
const [isSubmit, setIsSubmit] = useState(false)


const validate = (value)=>{
 const  error = {}
 const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
 if(!value.name){
  error.name='Name is required'
 }
 if(!value.email){
  error.email='Email is required'
 }else if(!regex.test(value.email)){
  error.email = "Enter valid email"
 }
 if(!value.password){
  error.password='Password is required'
 }else if (value.password.length < 4){
  error.password = 'Password must be 6 characters'
 }
 return error
}
const onchange = (e)=>{
setFormValue({...formValue,[e.target.name]:e.target.value})
}
const handleSubmit = (e)=>{
  e.preventDefault()
  setFormError(validate(formValue))
setIsSubmit(true)

}
  return (
    <div className='app'>
      
{Object.keys(FormError).length === 0 && isSubmit?(<FormTrue/>):(<form onSubmit={handleSubmit}>  <div className='formInput'>
    <h1>Register</h1>
        <label>Name</label>
        <input onChange={onchange} name='name' value={formValue.name} type="text" placeholder='Enter Name Here' />
        <p className='error'>{FormError.name}</p>
        <label>Email</label>
        <input onChange={onchange} name='email' value={formValue.email} placeholder='Enter Email Here' />
        <p className='error'>{FormError.email}</p>
        <label>Password</label>
        <input onChange={onchange} name='password' value={formValue.password} type="password" placeholder='Enter Password Here' />
        <p className='error'>{FormError.password}</p>

    </div>
        <button>Submit</button>
      </form> )}
      
      
    </div>
  )
}

export default AppForm