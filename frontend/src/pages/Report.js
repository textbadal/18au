import React from "react";
import "./Report.css";

const reports = [
  { id: 1, name: "STAAD.Pro Internship Report", file: "/pdf/Internship_Report_STAAD.Pro.pdf" },
  { id: 2, name: "Web Development Internship Report", file: "/pdf/Internship_Report_Web_Development.pdf" },
  { id: 3, name: "Construction Engineering Report", file: "/pdf/Internship_Report_Construction_Engineering.pdf" },
  { id: 4, name: "AutoCAD Internship Report", file: "/pdf/Internship_Report_AutoCAD.pdf" },
  { id: 5, name: "Data Science Internship Report", file: "/pdf/Internship_Report_Data Science.pdf" },
  { id: 7, name: "Revit Internship Report", file: "/pdf/Internship_Report_Revit.pdf" },
  { id: 8, name: "Internet of Things (IoT) Report", file: "/pdf/Internship_Report_IoT.pdf" },
  { id: 9, name: "Python Internship Report", file: "/pdf/Internship_Report_Python.pdf" },
  { id: 10, name: "Electric Vehicle) Report", file: "/pdf/Internship_Report_Electric Vehicle.pdf" },
  { id: 11, name: "Internet of Things (IoT) Report", file: "/pdf/Internship_Report_IoT.pdf" },
];

const Report = () => {
  return (
    <div className="report-container">
      <h2 className="report-title">📄 Download Internship Reports</h2>
      <p className="report-description">
 
        Click on the links below to download your desired report.
      </p>
      <div className="report-list-wrapper">
        <ul className="report-list">
          {reports.map((report) => (
            <li key={report.id} className="report-item">
              <a href={report.file} download className="download-btn" title={`Download ${report.name} PDF`}>
                <span className="file-icon"></span> {report.name} PDF
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Report;
