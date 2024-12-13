import { useState } from "react";

interface abc {
    id: number;
    name: string;
    loc: string;
}
const Crud = () => {
    const [loggedin, setLoggedin] = useState<boolean>(false);
    const [id, setId] = useState<number | null>(null);
    const [names, setNames] = useState<string>('');
    const [locs, setLocs] = useState<string>('');
    const [data, setData] = useState<abc[]>([
        { id: 1, name: 'Nitan', loc: 'Krishnonagar' },
        { id: 2, name: 'Indranil', loc: 'Howrah' },
        { id: 3, name: 'Souvik', loc: 'Kolkata' }
    ]);

    const deleted = (id: number) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    const updated = (id: number) => {
        setLoggedin(true);
        const updatedData = data.find(item => item.id === id);
        if (updatedData) {
            setId(id);
            setNames(updatedData.name);
            setLocs(updatedData.loc);
            
        }
    };

    const cleared = () => {
        setNames('');
        setLocs('');
        setId(null);
        setLoggedin(false);
    };

    const update = () => {
        let updatedData;
        if (id !== null) {
            
            updatedData = data.map(item =>item.id === id ? { ...item, name: names, loc: locs } : item);
            setData(updatedData);
            cleared();
        } 
        
        else {
            
            const newItem = {
                id: data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1,
                name: names,
                loc: locs,
            };
            updatedData = [...data, newItem];
            setData(updatedData);
            cleared();
        }
    };
    

    return (
        <>
            <div className="container">
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={names}
                                onChange={(e) => setNames(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="loc">Location</label>
                            <input
                                type="text"
                                id="loc"
                                value={locs}
                                onChange={(e) => setLocs(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="action">#</label>
                            <input
                                type="button"
                                id="action"
                                className="form-control"
                                value={loggedin ? 'Update' : 'Add'}
                                onClick={update}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="clear">#</label>
                            <input
                                type="button"
                                id="clear"
                                className="form-control"
                                value="Clear"
                                onClick={cleared}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>#</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.loc}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleted(item.id)}>
                                    Delete
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-info" onClick={() => updated(item.id)}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Crud;
