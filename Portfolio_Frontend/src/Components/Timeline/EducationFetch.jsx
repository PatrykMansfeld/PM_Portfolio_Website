import { useState, useEffect } from "react";

function EducationFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/education/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="fetch_loading">Loading Data</div>;
  if (error) return <div className="fetch_error">Error : {error.message}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div>
      <div className="Skills_Paragraph">
        {data.map((edu, index) => (
          <p className="education" key={index}>
            {edu.FieldOfStudy}
            {edu.Specialization}
            {edu.StartingDate}
            {edu.EndingDate}
          </p>
        ))}
      </div>
    </div>
  );
}

export default EducationFetch;
