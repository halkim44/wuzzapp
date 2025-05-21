export default function Auth() {
  return (
    <div>
      <h1>Login / Sign UP</h1>

      <div>
        <form>
          <label htmlFor="username">username: </label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" /> <br />
          <button type="submit">Loginz</button>
        </form>
      </div>
    </div>
  );
}
