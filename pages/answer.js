import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import Records from "../components/Records";
import Pagination from "../components/Pagination";

const answer = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const getRecords = async () => {
      setLoading(true);
      const { data: res } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      setRecords(res);
      setLoading(false);
    };
    getRecords();
  }, []);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = records.slice(firstIndex, lastIndex);

  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div className=" mx-8 ">
      <h1 className="mt-4 font-bold flex justify-center">
        *Note:* The console shouldn't be reading and pulling in more records
        than the 10 records (page size).
      </h1>
      <hr className="my-4" />
      <div className="mx-4 flex justify-between">
        <h1 className="text-xl font-semibold">
          Api Data from- https://jsonplaceholder.typicode.com/photos
        </h1>
        <button
          onClick={() => router.push("/")}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back to question
        </button>

        <hr className="my-4"></hr>
      </div>
      <hr className="my-4" />
      <div className="my-4">
        <Records records={currentRecords} loading={loading} />
        <div className="my-4 flex justify-center">
          <Pagination
            recordsPerPage={recordsPerPage}
            totalRecords={records.length}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default answer;
