import React, { useState } from "react";

interface Employee {
  id: number;
  name: string;
  loc: string;
  gen: string;
  dept: string;
  design: string;
}

const Search: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [results, setResult] = useState<Employee[]>([]);

  const employee: Employee[] = [
    { id: 1, name: "Suman", loc: "Haldia", dept: "Cse", gen: "Male", design: "student" },
    { id: 2, name: "Tathagata", loc: "Kolkata", dept: "Cse", gen: "Male", design: "student" },
    { id: 3, name: "Koushik Mohonta", loc: "Kolkata", dept: "Cse", gen: "Male", design: "teacher" },
    { id: 4, name: "Nitan", loc: "Krishnanagar", dept: "Cse", gen: "Male", design: "developer" },
  ];

  const search = () => {
    const filtered = employee.filter((emp) => emp.loc === location && emp.design === designation);
    setResult(filtered);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Employee Search</h3>
      <div className="row mb-7">
        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="col-md-7 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div className="col-md-15">
          <button className="btn btn-primary w-100" onClick={search}>
            Search
          </button>
        </div>
      </div>

      {results.length > 0 ? (
        <ul className="list-group">
          {results.map((result) => (
            <li key={result.id} className="list-group-item">
              <div><strong>ID:</strong> {result.id}</div>
              <div><strong>Name:</strong> {result.name}</div>
              <div><strong>Department:</strong> {result.dept}</div>
              <div><strong>Location:</strong> {result.loc}</div>
              <div><strong>Gender:</strong> {result.gen}</div>
              <div><strong>Designation:</strong> {result.design}</div>
            </li>
          ))}
        </ul>
      ) : (
        location || designation ? (
          <p className="mt-4">No results found.</p>
        ) : (
          <p className="mt-4">Please enter search criteria.</p>
        )
      )}
    </div>
  );
};

export default Search;
