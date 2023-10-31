import React from "react";
import MyButton from "./components/MyLibrary/MyButton";
import Link from "next/link";

const App = () => {
  return (
    <div>
      <div className="p-6">
        <p className="text-5xl font-bold my-12">Kiprono Collins</p>
        <p className="text-3xl mb-12">Full Stack Software Engineer</p>
        <p className="text-xl mb-12">Nairobi, Kenya</p>

        <Link href={"/KIPRONO COLLINS CV.pdf"}>
          <MyButton title="Resume" />
        </Link>
      </div>
    </div>
  );
};

export default App;
