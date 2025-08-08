import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div className="m-12">
      <h1>Wuzzapp</h1>
      <p>A fun chat messaging app!. Please sign Up or Login.</p>
      <div>
        <Link href="/auth"> Login</Link>/<Link href="/auth/register">Signup</Link>
      </div>
      <div className="flex mt-12">
        <div>
          <h3>User List</h3>
          <ul>
            {users.map((u) => (
              <li key={u.id}>{u.username}</li>
            ))}
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
