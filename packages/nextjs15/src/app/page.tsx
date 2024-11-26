import Link from "next/link";

export default function Home() {
  return (<>
    <h1>NextJS and StencilJS SSR integration demo</h1>
    Try 
    <p>    
      http://localhost:3000/client -> OK
      </p>
    <p>
    http://localhost:3000/server -> KO
    <br/>
    Page make a 500 error
    <br/>
    ⨯ Internal error: Error: Objects are not valid as a React child (found: object with keys $$typeof, type, key, ref, props, _owner, _store). If you meant to render a collection of children, use an array instead.
    <br/>
    Switch to client mode with error.

    </p>
    
  </>
  );
}
