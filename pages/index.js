import { useRouter } from "next/router";
import Header from "../components/Header";
export default function Home() {
  const router = useRouter();
  return (
    <div className=" mx-8 ">
      <Header />
      <hr className="my-4"></hr>
      <div className="flex justify-center">
        <button
          onClick={() => router.push("/answer")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Answer
        </button>
      </div>
    </div>
  );
}
