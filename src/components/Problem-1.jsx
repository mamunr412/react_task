import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [show, setShow] = useState("all");

  console.log(data);

  const [formData, setFormData] = useState({
    name: "",
    status: "",
  });

  const handleClick = (val) => {
    setShow(val);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [
      { name: formData.name, status: formData.status },
      ...prevData,
    ]);
    setFormData({
      name: "",
      status: "",
    });
  };

  useEffect(() => {
    if (show === "all") {
      setFilterData(data);
    } else {
      setFilterData(data?.filter((item) => item.status.toLowerCase() === show));
    }
  }, [show, data]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handelSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="status"
                onChange={handleChange}
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filterData?.length ? (
                <>
                  {filterData?.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr className="text-center pt-3">
                  <td colSpan={2}>No data found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
