const AllocateLive = () => {
  const tableData = [
    {
      sno: 1,
      caseId: "JU00001",
      serviceType: "Crown & Bridge",
      toothNumbers: "11, 12, 13",
      clientUnits: 3,
      designerUnits: 2,
      status: "Pending",
      allocateTo: "Dr. Smith",
      priority: "High",
      patient: "John Doe",
    },
    {
      sno: 2,
      caseId: "CK00002",
      serviceType: "Implant",
      toothNumbers: "21, 22",
      clientUnits: 2,
      designerUnits: 2,
      status: "In Progress",
      allocateTo: "Dr. Patel",
      priority: "Medium",
      patient: "Emma Watson",
    },
    {
      sno: 3,
      caseId: "BH00003",
      serviceType: "Smile Design",
      toothNumbers: "31–33",
      clientUnits: 3,
      designerUnits: 1,
      status: "Completed",
      allocateTo: "Dr. Lee",
      priority: "Low",
      patient: "Aarav Mehta",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col p-6 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        Case Allocation
      </h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">S.No</th>
              <th className="px-4 py-3 text-left font-semibold">Case ID</th>
              <th className="px-4 py-3 text-left font-semibold">
                Service Type
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                Tooth Numbers
              </th>
              <th className="px-4 py-3 text-left font-semibold">CC Units</th>
              <th className="px-4 py-3 text-left font-semibold">DC Units</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">Priority</th>
              <th className="px-4 py-3 text-left font-semibold">Patient</th>
              <th className="px-4 py-3 text-left font-semibold">Allocate To</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {tableData.map((row) => (
              <tr key={row.sno} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{row.sno}</td>
                <td className="px-4 py-3">{row.caseId}</td>
                <td className="px-4 py-3">{row.serviceType}</td>
                <td className="px-4 py-3">{row.toothNumbers}</td>
                <td className="px-4 py-3">{row.clientUnits}</td>
                <td className="px-4 py-3">{row.designerUnits}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      row.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : row.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      row.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : row.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {row.priority}
                  </span>
                </td>
                <td className="px-4 py-3">{row.patient}</td>
                <td className="px-4 py-3">{row.allocateTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllocateLive;
