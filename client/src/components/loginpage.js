function loginpage() {
  return (
    <div className="App">
        <form>
        <input type="text"  placeholder="Email" id="Email" name="email" ></input><br></br>
        <input type="password" placeholder="Password" name="password" id="password"></input><br></br>
        <input type="button" value="Login"></input><br></br>
        </form>
    </div>
  );
}

export default loginpage;