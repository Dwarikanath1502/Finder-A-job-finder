import React from 'react'

function Bot() {
  return (
    <div className='conainer-fluid'>
        <div
        className="fixed-bottom mx-4 mb-2"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "auto",
        }}
      >
        <i
          className="fa-solid fa-2xl fa-robot"
          style={{
            position: "absolute",
            bottom: 10,
            right: 15,
            height: "45px",
            width: "35px",
            alignItems: "center",
            borderRadius: "100px",
            color: "#DC3545",
          }}
        ></i>
        <p>
          <strong>Ask help</strong>{" "}
        </p>
      </div>
    </div>
  )
}

export default Bot