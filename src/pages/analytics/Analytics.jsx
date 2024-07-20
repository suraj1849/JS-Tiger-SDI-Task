import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import DownloadBtn from "../../components/downloadBtn/DownloadBtn";
import PieChart from "../../components/PieChart";
import "./analytics.css";

const Analytics = () => {
  const [documentList, setDocumentList] = useState([]);
  const [dataCount, setDataCount] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestDocuments = async () => {
      try {
        const response = await fetch("/data/analytics.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDocumentList(data);
      } catch (error) {
        setError("Error fetching latest documents");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestDocuments();
  }, []);

  const milestoneData = {
    labels: [
      "BOOKED (19)",
      "DISCHARGED (29)",
      "ARRIVED (22)",
      "DELIVERED (393)",
      "RETURNED (149)",
    ],
    datasets: [
      {
        data: [19, 29, 22, 393, 149],
        backgroundColor: [
          "#6B120A",
          "#EB5D50",
          "#F7A668",
          "#7BB896",
          "#1073E6",
        ],
      },
    ],
  };

  const timelineData = {
    labels: ["ON TIME (681)", "LATE (1)"],
    datasets: [
      {
        data: [681, 1],
        backgroundColor: ["#7BB896", "#F7A668"],
      },
    ],
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="page__wrapper">
      <div className="column_1">
        <Sidebar />
      </div>
      <div className="column_2">
        <Header pageTitle="Analytics" />
        <div className="row_1_analytics">
          <button className="active">
            <i className="fa-solid fa-ship"></i> Sea
          </button>
          <button>
            <i className="fa-solid fa-plane"></i> Air
          </button>
          <button>
            <i className="fa-solid fa-truck-fast"></i> Land
          </button>
        </div>
        <div className="row_2_analytics">
          <button>Shipments</button>
          <button>Containers</button>
        </div>
        <div className="row_3_analytics">
          <form onSubmit={handleFormSubmit}>
            <span>
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="0" selected disabled>
                  Select
                </option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
              </select>
            </span>
            <span>
              <label htmlFor="date">Date</label>
              <select name="date">
                <option value="0" selected disabled>
                  Select
                </option>
                <option value="1">Date 1</option>
                <option value="2">Date 2</option>
              </select>
            </span>
            <span>
              <label htmlFor="period">Period</label>
              <select name="period">
                <option value="0" selected disabled>
                  Select
                </option>
                <option value="1">Period 1</option>
                <option value="2">Period 2</option>
              </select>
            </span>
            <span>
              <button type="reset">Cancel</button>
              <button type="submit">Go</button>
            </span>
          </form>
        </div>
        <div className="row_4_analytics">
          <div className="inner_col_1_analytics">
            <h4>Milestones</h4>
            <PieChart
              labels={milestoneData.labels}
              data={milestoneData.datasets[0].data}
              backgroundColor={milestoneData.datasets[0].backgroundColor}
              position={"right"}
            />
          </div>
          <div className="inner_col_2_analytics">
            <h4>Timelines</h4>
            <PieChart
              labels={timelineData.labels}
              data={timelineData.datasets[0].data}
              backgroundColor={timelineData.datasets[0].backgroundColor}
              position={"right"}
            />
          </div>
        </div>
        {loading ? (
          <div>Loading data...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="row_5_analytics">
            {/* Add your list sections here, similar to the provided code */}
          </div>
        )}
        <div className="row_6_analytics">
          <div className="inner_row_1_analytics">
            <DownloadBtn />
          </div>
          <div className="inner_row_2_analytics">
            <table>
              <thead>
                <tr>
                  <th>HBL#</th>
                  <th>MBL#</th>
                  <th>PO# / REF#</th>
                  <th>Receipt</th>
                  <th>Loading</th>
                  <th>Discharge</th>
                  <th>Delivery</th>
                  <th>Booking#</th>
                  <th>Size Type</th>
                  <th>Carrier</th>
                  <th>Commodity</th>
                  <th>Milestone</th>
                  <th>Milestone Group</th>
                </tr>
              </thead>
              <tbody>
                {documentList.slice(0, dataCount).map((item) => (
                  <tr key={item.id}>
                    <td>{item.HBL}</td>
                    <td>{item.MBL}</td>
                    <td>{item.PO}</td>
                    <td>{item.Receipt}</td>
                    <td>{item.Loading}</td>
                    <td>{item.Discharge}</td>
                    <td>{item.Delivery}</td>
                    <td>{item.Booking}</td>
                    <td>{item.SizeType}</td>
                    <td>{item.Carrier}</td>
                    <td>{item.Commodity}</td>
                    <td>{item.Milestone}</td>
                    <td>{item.MilestoneGroup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="inner_row_3_analytics">
            <div className="data__count">
              <select
                defaultValue={10}
                onChange={(e) => setDataCount(parseInt(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={documentList.length / 2}>
                  {documentList.length / 2}
                </option>
                <option value={documentList.length}>All</option>
              </select>
              <small>
                1 - {dataCount} of {documentList.length}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
