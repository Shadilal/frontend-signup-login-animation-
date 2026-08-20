
function App() {
  const viewLogin = ()=>{
    const S = document.getElementById('signup')
     const L = document.getElementById('login')
   
      S.style.top = "-600px"
      L.style.top = "0px"
  }
    const viewSignup = ()=>{
    const S = document.getElementById('signup')
     const L = document.getElementById('login')
   
      S.style.top = "0px"
      L.style.top = "600px"
  }
  return (
    <div>
      <div style={{height:"100vh"}} className="container d-flex justify-content-center align-items-center">
        <div id="main-container" style={{height:"600px",width:"500px"}} className="main overflow-hidden">
              <div style={{height:"600px",width:"500px"}} id="signup" className="signup">
                <h1>Signup </h1>
                <form className="p-3" action="">
                  <input type="text" placeholder="username" className="form-control mt-4"  name="" id="" />
                  <input type="text" placeholder="email" className="form-control mt-4" name="" id="" />
                  <input type="text" placeholder="password" className="form-control mt-4" name="" id="" />
                  <input type="text" placeholder="confirm password" className="form-control mt-4" name="" id="" />
                  <input type="submit" className="btn btn-primary w-100 mt-3" value="Signup" />
                </form>
                <div className="p-3">
                  <p>Already have an account?</p><button className="btn btn-secondary w-100 p-2" onClick={viewLogin}>go to Login</button>
                </div>
                
              </div>
              <div style={{height:"600px",width:"500px"}} id="login" className="login">
                <h1>Login</h1>
                <form className="p-3" action="">
                  <input type="text" placeholder="email" className="form-control mt-4"  name="" id="" />
                  <input type="text" placeholder="password" className="form-control mt-4" name="" id="" />
                  <input type="submit" className="btn btn-primary w-100 mt-3" value="Signup" />
                </form>
                <div className="p-3">
                  <p>Dont have an account?</p><button className="btn btn-secondary w-100 p-2" onClick={viewSignup}>go to Signup</button>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default App
