import React, { useEffect, useState } from "react";

const Education = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/education/");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Education</h2>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.UniversityName}</p>
          <p>{item.FieldOfStudy}</p>
          <p>{item.Specialization}</p>
          <p>{item.StartingDate}</p>
          <p>{item.EndingDate}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
