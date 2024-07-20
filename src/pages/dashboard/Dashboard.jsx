import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Overview from "../../components/overview/Overview";
import AnnounceIcon from "../../assets/icons/announcement.png";
import PdfIcon from "../../assets/icons/Pdf.png";
import "./dashboard.css";
import PieChartAnalytics from "../../components/PieChartAnalytics";

const Dashboard = () => {
  const [docList, setDocList] = useState(null);

  useEffect(() => {
    const fetchLatestDocuments = async () => {
      try {
        const response = await fetch("/data/documents.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDocList(data);
      } catch (error) {
        console.log("Error fetching latest documents", error);
      }
    };

    fetchLatestDocuments();
  }, []);

  const dashboardData = {
    labels: [
      "NHAVA SHEVA, INDIA",
      "HONG KONG, HONG KONG",
      "YANTIAN, CHINA",
      "DALIAN, CHINA",
      "LONDON GATEWAY PORT, UK",
      "OTHER",
    ],
    datasets: [
      {
        data: [200, 70, 20, 30, 40, 60],
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

  return (
    <div className="page__wrapper">
      <div className="column_1">
        <Sidebar />
      </div>
      <div className="column_2">
        <Header pageTitle="Dashboard" />
        <div className="row_1">
          <Overview
            textTop="Total Bookings"
            textBottom="501 Bookings"
            iconSrc="assets/icons/bookings.png"
          />
          <Overview
            textTop="Bookings Utilized"
            textBottom="501 Bookings"
            iconSrc="assets/icons/utilized.png"
          />
          <Overview
            textTop="Booking Cancelled"
            textBottom="0 Bookings"
            iconSrc="assets/icons/cancelled.png"
          />
          <Overview
            textTop="Utilization"
            textBottom="100%"
            iconSrc="assets/icons/utilization.png"
          />
        </div>
        <div className="row_2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52891855.328539245!2d-161.58774224819345!3d35.98944842280374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1715954251646!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row_3">
          <div className="pie__chart__heading">
            <h4>Pie Chart Analysis</h4>
            <span className="ship__btn">
              <button className="active">
                <i className="fa-solid fa-ship"></i> Sea
              </button>
              <button>
                <i className="fa-solid fa-plane"></i> Air
              </button>
              <button>
                <i className="fa-solid fa-truck-fast"></i> Land
              </button>
            </span>
          </div>
          <div className="pie__chart__container">
            <PieChartAnalytics
              labels={dashboardData.labels}
              data={dashboardData.datasets[0].data}
              backgroundColor={dashboardData.datasets[0].backgroundColor}
              position={"bottom"}
              chartName={"Origin Port"}
            />
            <PieChartAnalytics
              labels={dashboardData.labels}
              data={dashboardData.datasets[0].data}
              backgroundColor={dashboardData.datasets[0].backgroundColor}
              position={"bottom"}
              chartName={"Destination Port"}
            />
            <PieChartAnalytics
              labels={dashboardData.labels}
              data={dashboardData.datasets[0].data}
              backgroundColor={dashboardData.datasets[0].backgroundColor}
              position={"bottom"}
              chartName={"Carrier"}
            />
            <PieChartAnalytics
              labels={dashboardData.labels}
              data={dashboardData.datasets[0].data}
              backgroundColor={dashboardData.datasets[0].backgroundColor}
              position={"bottom"}
              chartName={"Consignee or Shipper"}
            />
            <PieChartAnalytics
              labels={dashboardData.labels}
              data={dashboardData.datasets[0].data}
              backgroundColor={dashboardData.datasets[0].backgroundColor}
              position={"bottom"}
              chartName={"Milestones"}
            />
          </div>
        </div>
        <div className="row_4">
          <div className="inner_column_1">
            <h4>Latest Documents</h4>
            <div className="document__list">
              {docList && (
                <ul>
                  {docList.map((item) => (
                    <li className="document__list__item" key={item.id}>
                      <div className="doc_details">
                        <img src={PdfIcon} alt="Pdf Icon" />
                        <span className="title__and__desc">
                          <span className="doc__title">{item.title}</span>
                          <span className="doc__desc">
                            {item.description}
                          </span>
                        </span>
                      </div>
                      <div className="date__and__time">
                        <span className="date">{item.date}</span>
                        <span className="time">{item.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="inner_column_2">
            <h4>Announcements</h4>
            <div className="announce__soon">
              <p>
                Soon you will see latest announcements/new in this section.
              </p>
              <div>
                <img src={AnnounceIcon} alt="Announcement" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
