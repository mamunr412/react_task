import React, { useEffect, useState } from "react";

const Problem2 = () => {
  const [allCountryContacts, setAllCountryContacts] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    let uri = `https://contact.mediusware.com/api/contacts/`;
    if (country) {
      uri = `https://contact.mediusware.com/api/country-contacts/United%20States/`;
    }
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setAllCountryContacts(data.results));
  }, [country]);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              type="button"
              class="btn btn-lg btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              All Contacts
            </button>

            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              onClick={() => setCountry("United States")}
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      {/* All Contacts modal  */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                All Contacts
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ul>
                {allCountryContacts.map((country) => {
                  return (
                    <li key={country.id}>
                      <span className="fw-bold pe-3">
                        {country.country.name} :
                      </span>
                      {country.phone}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* US Contacts modal */}
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                US Contacts
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {" "}
              {allCountryContacts.map((country) => {
                return (
                  <li key={country.id}>
                    <span className="fw-bold pe-3">
                      {country.country.name} :
                    </span>
                    {country.phone}
                  </li>
                );
              })}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem2;
