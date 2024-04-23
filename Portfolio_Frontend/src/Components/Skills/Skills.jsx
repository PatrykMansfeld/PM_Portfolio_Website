import { useState, useEffect } from "react";

function SkillsComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/skills");
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
      <h1>Skills</h1>
      <div className="Skills_Paragraph">
        {data.map((skill, index) => (
          <p className="Skills" key={index}>
            #{skill.skillName}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SkillsComponent;
