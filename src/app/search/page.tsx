export default function Search() {
  return (
    <div>
      <h1>Search</h1>

      <div>
        <form>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Who u searching for?"
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div>
        <ul>
          <li>
            <div>user1</div>
            <div>
              <button>Add Friend</button>
            </div>
          </li>
          <li>
            <div>user2</div>
            <div>
              <button>Add Friend</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
