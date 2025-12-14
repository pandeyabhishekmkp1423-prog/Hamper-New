import React, { useEffect, useState } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

const steps = [
  "Pickup Scheduled",
  "Washing in Progress",
  "Drying & Quality Check",
  "Ironing & Folding",
  "Out for Delivery",
];

const OrderTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) =>
        prev < steps.length - 1 ? prev + 1 : prev
      );
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="max-w-lg mx-auto bg-white dark:bg-gray-900 
                 rounded-2xl shadow-xl p-6 border 
                 dark:border-gray-700"
    >
      <h3 className="text-xl font-bold text-center mb-6">
        Order Tracking
      </h3>

      <div className="space-y-5">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <RiCheckboxCircleFill
                className={`text-xl ${
                  index <= activeStep
                    ? "text-blue-600"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
              {index !== steps.length - 1 && (
                <div
                  className={`w-0.5 h-8 ${
                    index < activeStep
                      ? "bg-blue-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              )}
            </div>

            <div>
              <p
                className={`font-medium ${
                  index <= activeStep
                    ? "text-gray-800 dark:text-gray-100"
                    : "text-gray-400"
                }`}
              >
                {step}
              </p>
              {index === activeStep && (
                <p className="text-sm text-blue-600 mt-1">
                  In progress…
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTimeline;
