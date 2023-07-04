import './LoginForm.css'

export default function LoginForm({setUser}){

    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        
        setUser({
            email: e.target.email.value,
            password: e.target.password.value
        })
    }

    return (
        <div className='LoginForm'>
            <form className="" onSubmit={handleOnSubmit}>
                <label>
                    Email:
                    <input 
                    type="email" 
                    name="email"
                    />
                </label>
                <label>
                    Password:
                    <input 
                    type="password"
                    name="password"
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}