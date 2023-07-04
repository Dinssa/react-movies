import LoginForm from "./LoginForm"

export default function LoginPage({setUser}){
    return (
        <main className="LoginPage">
            <h1>Login Page</h1>
            <LoginForm setUser={setUser}/>
        </main>
    )
}