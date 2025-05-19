export default function Home() {
  return (
    <div className="m-12">
      <h1>Wuzzapp</h1>
      <p>A fun chat messaging app!. Please sign Up or Login.</p>
      <div>
        <button>Login/Signup</button>
      </div>
      <div className="flex mt-12">
        <div>
          <h3>User List</h3>
          <ul>
            <li>User1</li>
            <li>User2</li>
          </ul>
          <button className="mt-6">Search User</button>
        </div>
        <div className="ml-12">
          <h2>User 1</h2>
          <div>
            <ul>
              <li>
                <div>User3</div>
                <p>Hi</p>
              </li>
              <li>
                <div>User1</div>
                <p>Hi!</p>
              </li>
              <li>
                <div>User1</div>
                <p>Hru?</p>
              </li>
            </ul>
          </div>
          <div>
            <form>
              <input
                type="text"
                name="message"
                placeholder="what ur message bro?"
              />
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
