import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard"; 

const Users = () => {
    interface abc {
        userId: number;
        id: number;
        title: string;
        body: string;
    }

    
    const [apidata, setApidata] = useState<abc[]>([]);
    const [selectedData, setSelectedData] = useState<abc | null>(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((val) => {
                setApidata(val.data.slice(0, 10)); 
            });
    }, []);

    const showdata = (id: number) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((val) => {
                setSelectedData(val.data); 
            });
    };

    return (
        <>
            <div className="container">
                
            <UserCard data={selectedData} />
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Action</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apidata.map((item) => (
                            <tr>
                                <td><button className="btn btn-info" onClick={() => showdata(item.id)}>Show</button></td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

        
            </div>
        </>
    );
};

export default Users;
