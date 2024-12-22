import React from "react";

const StatsWidget = ({ title, count }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg text-center">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-2xl font-semibold text-purple-600">{count}</p>
    </div>
  );
};

export default StatsWidget;
