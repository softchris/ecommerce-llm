 // create component for login
 const Login = { 
    template: `
    <div>
        <h2>Login</h2>
        <div class="form-group">
            <label for="username">Username</label>
            <input class="form-control" type="text" id="username" placeholder="Username" />

            <label for="password">Password</label>
            <input class="form-control" type="password" id="password" placeholder="Password" />

            <div class="text-right">
                <button class="btn btn-primary">Login</button>
            </div>
        </div>
    </div>
    
    ` 
}

export default Login;