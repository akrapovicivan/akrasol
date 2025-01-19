"use client"
import { useState } from "react";

const CostCalculatorPage = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3; // Total number of steps
  const [formData, setFormData] = useState({
    kwhInstalled: "",
    roofType: "",
    roofMaterial: "",
    truckAccess: "",
    lightningRod: "",
    location: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const calculateCost = () => {
    const kwh = Number(formData.kwhInstalled);
    const isSloped = formData.roofType === "sloped";

    if (isSloped) {
      return kwh > 4 ? kwh * 1000 : kwh * 900;
    } else {
      return kwh > 10 ? kwh * 900 : kwh * 1000;
    }
  };

  const handleSubmit = () => {
    const cost = calculateCost();
    console.log("Form Data:", { ...formData, cost });
    alert(`The estimated cost is €${cost.toLocaleString()}`);
  };

  const progress = Math.round((step / totalSteps) * 100);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-md shadow-md">
      <div className="mb-6">
        <div className="relative w-full h-2 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-2 bg-indigo-600 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Step {step} of {totalSteps}
        </p>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-6">Solar Panel Cost Estimator</h1>

      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Step 1: Solar Details</h2>
          <div className="md:flex">
            <label className="block mb-3 w-full md:w-1/2 md:pr-5">
                <span className="text-gray-700">kWh Installed (required):</span>
                <input
                type="number"
                name="kwhInstalled"
                className="mt-3 block w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.kwhInstalled}
                onChange={handleInputChange}
                required
                />
            </label>
            <label className="block mb-3 w-full md:w-1/2 md:pl-5">
                <span className="text-gray-700">Roof Type (required):</span>
                <select
                name="roofType"
                className="mt-3 block w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.roofType}
                onChange={handleInputChange}
                required
                >
                <option value="">Select</option>
                <option value="sloped">Sloped</option>
                <option value="straight">Straight</option>
                </select>
            </label>
          </div>
          <button
            onClick={nextStep}
            disabled={!formData.kwhInstalled || !formData.roofType}
            className="px-4 mt-5 block py-2 ml-auto bg-indigo-600 text-white rounded-md enabled:hover:bg-indigo-700 disabled:opacity-80 disabled:pointer-disabled disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Step 2: Roof Details</h2>
          <div className="md:flex">
            <label className="block mb-3 w-full md:w-1/2 md:pr-5">
                <span className="text-gray-700">Roof Material:</span>
                <select
                name="roofMaterial"
                className="mt-3 block w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.roofMaterial}
                onChange={handleInputChange}
                >
                <option value="">Select</option>
                <option value="tile">Tile</option>
                <option value="concrete">Concrete</option>
                <option value="metal">Metal</option>
                <option value="concrete-waterproofing">Concrete with Waterproofing</option>
                </select>
            </label>
            <label className="block mb-3 w-full md:w-1/2 md:pl-5">
                <span className="text-gray-700">Can a truck access the object?</span>
                <select
                name="truckAccess"
                className="mt-3 block w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.truckAccess}
                onChange={handleInputChange}
                >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </label>
          </div>
          <div className="mt-5 flex justify-between">
            <button onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-md mr-3 hover:bg-gray-500">
                Back
            </button>
            <button onClick={nextStep} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Step 3: Additional Details</h2>
          <div className="md:flex">
            <label className="block mb-3 w-full md:w-1/2 md:pr-5">
                <span className="text-gray-700">Is there a lightning rod?</span>
                <select
                name="lightningRod"
                className="mt-3 block w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.lightningRod}
                onChange={handleInputChange}
                >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </label>
            <label className="block mb-3 w-full md:w-1/2 md:pl-5">
                <span className="text-gray-700">Location:</span>
                <input
                type="text"
                name="location"
                className="mt-3 block w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.location}
                onChange={handleInputChange}
                />
            </label>
          </div>
          <div className="mt-5 flex justify-between">
            <button onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-md mr-3 hover:bg-gray-500">
                Back
            </button>
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
                Calculate Cost
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CostCalculatorPage;
