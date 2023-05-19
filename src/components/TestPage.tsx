import { useState } from "react";
import { User } from "../models/types.ts";
import { storeDocument, getCollection } from "../firebase/firestoreUtils.ts";

const TestPage = () => {
    const [a, setA] = useState<User>({
        // id: "asd",
        name: "aaa",
        password: "",
        expProgress: "",
        level: "",
        profileImg: "",
    });
    const handleSet = async () => {
        await storeDocument("d", a);
    };
    const handleGet = async () => {
        console.log(await getCollection<User>("d"))
    };

    return (
        <div>
            <button style={{backgroundColor: "white"}} onClick={handleSet}/>
            <button style={{backgroundColor: "white"}} onClick={handleGet}/>
        </div>
    );
};

export default TestPage;