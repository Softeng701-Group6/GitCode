import { useState } from "react";
import { Graph, User } from "../models/types.ts";
import { storeDocument, getCollection } from "../firebase/firestoreUtils.ts";
import { Collection } from "../firebase/enums.ts";

const TestPage = () => {
  // const [a] = useState<User>({
  //     // id: "asd",
  //     name: "aaa",
  //     password: "",
  //     expProgress: "",
  //     level: "",
  //     profileImg: "",
  // });
  const [b] = useState<Graph>({
    nodes: ["C1", "C2", "C3"],
    edges: [
      { source: "C1", target: "C2" },
      { source: "C1", target: "C3" },
    ],
  });

  const handleSet = async () => {
    // await storeDocument("d", a);
    await storeDocument(Collection.GRAPHS, b);
  };
  const handleGet = async () => {
    console.log(await getCollection<User>("d"));
  };

  return (
    <div>
      <button style={{ backgroundColor: "white" }} onClick={handleSet} />
      <button style={{ backgroundColor: "white" }} onClick={handleGet} />
    </div>
  );
};

export default TestPage;
