"use client"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const CostCalculatorPage = () => {
    useEffect(() => {
            document.title = 'Akrasol - Cost Caculator';
          }, []);

    const [step, setStep] = useState(1);
    const totalSteps = 3;
    const [calculatedCost, setCalculatedCost] = useState<number | null>(null);
    const [showInquiryForm, setShowInquiryForm] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [formData, setFormData] = useState({
        kwhInstalled: "",
        roofType: "",
        roofMaterial: "",
        truckAccess: "",
        lightningRod: "",
        location: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "kwhInstalled") {
            if (value === '' || /^[1-9]\d*$/.test(value)) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => {
        setStep((prev) => prev - 1);

        if (step === 3) {
            setCalculatedCost(null);
            setShowInquiryForm(false);
        }
    }

    const calculateCost = () => {
        const kwh = Number(formData.kwhInstalled);
        const isSloped = formData.roofType === "sloped";

        if (isNaN(kwh) || kwh <= 0) {
            alert("Please enter a valid number for kWh Installed.");
            return;
        }

        const cost = isSloped
            ? kwh > 4
                ? kwh * 1000
                : kwh * 900
            : kwh > 10
                ? kwh * 900
                : kwh * 1000;

        setCalculatedCost(cost);
        return cost;
    };

    const translateRoofType = (value) => {
        if (value === 'sloped') return 'Kosi';
        if (value === 'straight') return 'Ravni';
        return 'Nije navedeno';
    };

    const translateMaterial = (value) => {
        switch (value) {
            case 'tile': return 'Crijep';
            case 'concrete': return 'Beton';
            case 'metal': return 'Metal';
            case 'concrete-waterproofing': return 'Beton s hidroizolacijom';
            default: return 'Nije navedeno';
        }
    };

    const translateYesNo = (value) => {
        if (value === 'yes') return 'Da';
        if (value === 'no') return 'Ne';
        return 'Nije navedeno';
    };

    const translateRoofMaterial = (value) => {
        switch (value) {
            case 'tile':
                return 'Crijep';
            case 'concrete':
                return 'Beton';
            case 'metal':
                return 'Metal';
            case 'concrete-waterproofing':
                return 'Beton s hidroizolacijom';
            default:
                return value;
        }
    };

    const translateTruckAccess = (value) => {
        switch (value) {
            case 'yes':
                return 'Da';
            case 'no':
                return 'Ne';
            default:
                return value;
        }
    };

    const handleSubmit = () => {
        const cost = calculateCost();
        console.log("Form Data:", { ...formData, cost });
    };

    const sendInquiry = async () => {
      setIsLoading(true);

        try {
            if (!userEmail) {
                alert("Please provide your email before sending the inquiry.");
                setIsLoading(false);
                return;
            }

            const response = await fetch("/api/sendInquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userEmail,
                    additionalInfo,
                    formData,
                    calculatedCost,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Your inquiry has been sent successfully!");
                setShowInquiryForm(false);
                window.location.href = '/';
            } else {
                alert(`Failed to send inquiry: ${data.message}`);
            }

            setIsLoading(false);
        } catch (error) {
            console.error("Error:", error);
            alert("An unexpected error occurred while sending your inquiry.");
            setIsLoading(false);
        }
    };

    const progress = Math.round((step / totalSteps) * 100);

    return (
        <div className="flex md:flex-row flex-col justify-between lg:px-48 sm:px-16 px-4">
            <div className={((formData.kwhInstalled || formData.roofType || formData.roofMaterial || formData.truckAccess || formData.lightningRod || formData.location) ? "w-auto flex-grow p-6 mr-0 md:mr-8 opacity-100" : "w-[0] h-[0] opacity-0") 
                            + " max-w-none md:max-w-sm mt-12 bg-gray-50 rounded-md shadow-md transition-all overflow-hidden"}>
                <h3 className="text-gray-700">Odabrani podaci:</h3>
                <div className="flex gap-8 flex-wrap w-full justify-between py-4 mb-4 pl-2">
                    <div className="flex flex-col gap-2 w-full force-dark">
                        {formData.kwhInstalled && (
                            <div>
                                <span className="font-bold">kWh: </span>
                                <span>{formData.kwhInstalled} kWh</span>
                            </div>)
                        }

                        {formData.roofType && (
                            <div>
                                <span className="font-bold">Vrsta krova: </span>
                                <span>{formData.roofType == "sloped"? 'kosi':'ravni'}</span>
                            </div>)
                        }
                    </div>

                    <div className="flex flex-col gap-2 w-full force-dark">
                        {formData.roofMaterial && (
                            <div>
                                <span className="font-bold">Materijal krova: </span>
                                <span>{translateRoofMaterial(formData.roofMaterial)}</span>
                            </div>
                        )}

                        {formData.truckAccess && (
                            <div>
                                <span className="font-bold">Pristup vozilom: </span>
                                <span>{translateTruckAccess(formData.truckAccess)}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 w-full force-dark">
                        {formData.lightningRod && (
                            <div>
                                <span className="font-bold">Gromobran: </span>
                                <span>{formData.lightningRod == 'yes' ? 'Da' : 'Ne'}</span>
                            </div>)
                        }

                        {formData.location && (
                            <div>
                                <span className="font-bold">Lokacija: </span>
                                <span>{formData.location}</span>
                            </div>)
                        }
                    </div>
                </div>
            </div>
                
            <div className="my-auto mt-12 p-6 bg-gray-50 rounded-md shadow-md flex-grow">
                <div className="mb-6">
                    <div className="relative w-full h-2 bg-gray-300 rounded-full">
                        <div
                            className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                        Korak {step} od {totalSteps}
                    </p>
                </div>
                
                {step === 1 && (
                    <div>
                        <h2 className="text-gray-700 mb-4">Podaci o solarnom sustavu</h2>
                        <p className="text-gray-500 text-sm mb-3">
                            Polja označena <span className="text-blue-600">*</span> su obavezna.
                        </p>
                        <div className="md:flex">
                            <label className="block mb-3 w-full md:w-1/2 md:pr-5 relative">
                                <span className="text-gray-700">Proizvodnja električne energije<span className="text-blue-600 text-xl">*</span></span>
                                <input
                                    type="number"
                                    name="kwhInstalled"
                                    className="mt-3 px-2 block w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    value={formData.kwhInstalled}
                                    onChange={handleInputChange}
                                    min="1"
                                    required
                                />
                                <span className="absolute right-8 top-1/2 mt-2 text-gray-500">kWh</span>
                            </label>
                            <label className="block mb-3 w-full md:w-1/2 md:pl-5">
                                <span className="text-gray-700">Vrsta krova<span className="text-blue-600 text-xl">*</span></span>
                                <select
                                    name="roofType"
                                    className="mt-3 block px-2 w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    value={formData.roofType}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="" disabled>Izaberite vrstu krova</option>
                                    <option value="sloped">Kosi</option>
                                    <option value="straight">Ravni</option>
                                </select>
                            </label>
                        </div>
                        <button
                            onClick={nextStep}
                            disabled={!formData.kwhInstalled || !formData.roofType}
                            className="px-4 mt-5 block py-2 ml-auto bg-blue-600 text-white rounded-md enabled:hover:bg-blue-700 disabled:opacity-30 disabled:pointer-disabled disabled:cursor-not-allowed"
                        >
                            Dalje
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-gray-700 mb-4">Detalji o krovu</h2>
                        <div className="md:flex">
                            <label className="block mb-3 w-full md:w-1/2 md:pr-5">
                                <span className="text-gray-700">Materijal krova:</span>
                                <select
                                    name="roofMaterial"
                                    className="mt-3 px-2 block w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    value={formData.roofMaterial}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Izaberite materijal krova</option>
                                    <option value="tile">Crijep</option>
                                    <option value="concrete">Beton</option>
                                    <option value="metal">Metal</option>
                                    <option value="concrete-waterproofing">Beton s hidroizolacijom</option>
                                </select>
                            </label>
                            <label className="block mb-3 w-full md:w-1/2 md:pl-5">
                                <span className="text-gray-700">Pristup kamionom?</span>
                                <select
                                    name="truckAccess"
                                    className="mt-3 block px-2 w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    value={formData.truckAccess}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled >Izaberite dostupnost pristupa kamionom</option>
                                    <option value="yes">Da</option>
                                    <option value="no">Ne</option>
                                </select>
                            </label>
                        </div>
                        <div className="mt-5 flex justify-between">
                            <button onClick={prevStep} className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-100 rounded-md mr-3">
                                Nazad
                            </button>
                            <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Dalje
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-gray-700 mb-4">Dodatni podaci</h2>
                        <div className="md:flex">
                            <label className="block mb-3 w-full md:w-1/2 md:pr-5">
                                <span className="text-gray-700">Gromobran instaliran?</span>
                                <select
                                    name="lightningRod"
                                    className="mt-3 px-2 block w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    value={formData.lightningRod}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled >Izaberite</option>
                                    <option value="yes">Da</option>
                                    <option value="no">Ne</option>
                                </select>
                            </label>
                            <label className="block mb-3 w-full md:w-1/2 md:pl-5">
                                <span className="text-gray-700">Lokacija:</span>
                                <input
                                    type="text"
                                    name="location"
                                    className="mt-3 block w-full h-[30px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div className="mt-5 flex justify-between">
                            <button onClick={prevStep} className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-100 rounded-md mr-3">
                                Nazad
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                            >
                                Izračunaj trošak
                            </button>
                        </div>
                    </div>
                )}

                {calculatedCost !== null && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md">
                        <p className="text-lg font-semibold text-gray-800">
                            Procijenjeni trošak:: <span className="text-blue-600">€{calculatedCost.toLocaleString()}</span>
                        </p>
                        <p className="text-sm text-gray-600 mt-3">
                            Ovo je samo procjena dok vam naš tim ne dostavi službenu ponudu.
                        </p>
                        <button
                            onClick={() => setShowInquiryForm(true)}
                            className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Pošalji upit
                        </button>
                    </div>
                )}

                {showInquiryForm && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-md shadow-md">
                        <h2 className="text-gray-700 mb-4">Pošalji upit</h2>
                        <p className="mb-4 text-gray-600">Vaš upit će sadržavati sljedeće informacije:</p>
                        <pre className="mb-4 p-4 md:p-8 bg-gray-100 rounded-md text-sm text-gray-800 text-elipsis overflow-scroll">
                    {`
Instalirana snaga: ${formData.kwhInstalled || 'Nije navedeno'}
Vrsta krova: ${translateRoofType(formData.roofType)}
Materijal krova: ${translateMaterial(formData.roofMaterial)}
Pristup vozilom: ${translateYesNo(formData.truckAccess)}
Gromobran: ${translateYesNo(formData.lightningRod)}
Lokacija: ${formData.location || 'Nije navedeno'}
Procijenjeni trošak: €${calculatedCost?.toLocaleString('hr-HR') || 'Nije izračunato'}
    `}
                        </pre>
                        <label className="block mb-3">
                            <span className="text-gray-700">Vaš Email<span className="text-blue-600 text-xl">*</span></span>
                            <input
                                type="email"
                                className="mt-1 px-2 block h-[30px] w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label className="block mb-3">
                            <span className="text-gray-700">Dodatne informacije:</span>
                            <textarea
                                className="mt-1 block w-full px-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                rows={4}
                                value={additionalInfo}
                                onChange={(e) => setAdditionalInfo(e.target.value)}
                            />
                        </label>
                        <button
                            onClick={sendInquiry}
                            disabled={!userEmail || isLoading}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 enabled:hover:bg-blue-700 disabled:opacity-30 disabled:pointer-disabled disabled:cursor-not-allowed"
                        >
                            {isLoading && (
                              <FontAwesomeIcon icon={faSpinner} spin className="w-4 h-4 mr-3" />
                            )}
                            Pošalji upit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CostCalculatorPage;
