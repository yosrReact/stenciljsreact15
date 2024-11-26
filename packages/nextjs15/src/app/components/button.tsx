
"use client"
export default function MyButton() {

  function handleClick(): void {
    console.log("Handle Click");
    alert("Handle Click")
  }

  return <button className="primary" onClick={handleClick}>Post a comment</button>;
}
