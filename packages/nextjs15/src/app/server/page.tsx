import { ShadowComponent } from "@test/react-library-ssr";
import MyButton from "../components/button";

type blog = {
  id: string,
  title: string,
  body: string
}

async function getBlogs(): Promise<blog[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response?.json();
}

export default async function Dashboard() {
  let blogs: blog[] = [];
  blogs = await getBlogs();

  return (
    <>
      <main role="main" className="mainContent">
        <div className="mainWrapper">
          {blogs.map(item =>
            <ShadowComponent key={item.id} heading={item.title}>
              <div slot="header">
                <div>TAG</div>
              </div>
              <div className="grid colMin500">
                <div>{item.body}</div>
                <div>{item.body}</div>
              </div>
              <div slot="footer">
                <MyButton></MyButton>
              </div>
            </ShadowComponent>
          )}
        </div>
      </main>
    </>);
}