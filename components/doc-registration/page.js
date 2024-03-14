'use client'
import { useState } from "react";

export default function Registration(props) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specialization: "",
        hospitalName: "",
        education: "",
        licenseNumber: "",
        area: "",
        city: "",
        state: "",
        postCode: ""
    });

    const handleChange = (event, fieldName) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            [fieldName]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Replace with actual backend call
    };

    return (
        <div className="flex items-center justify-center p-12 App">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <h1>Register as {props.type}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="firstName" className="mb-3 block text-base font-medium text-[#07074D]">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.firstName}
                            onChange={(event) => handleChange(event, "firstName")}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName" className="mb-3 block text-base font-medium text-[#07074D]">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.lastName}
                            onChange={(event) => handleChange(event, "lastName")}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.email}
                            onChange={(event) => handleChange(event, "email")}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.phone}
                            onChange={(event) => handleChange(event, "phone")}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="specialization" className="mb-3 block text-base font-medium text-[#07074D]">Specialization</label>
                        <input
                            type="text"
                            name="specialization"
                            id="specialization"
                            placeholder="Enter your specialization"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.specialization}
                            onChange={(event) => handleChange(event, "specialization")}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="hospitalName" className="mb-3 block text-base font-medium text-[#07074D]">Hospital Name</label>
                        <input
                            type="text"
                            name="hospitalName"
                            id="hospitalName"
                            placeholder="Enter your hospital name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.hospitalName}
                            onChange={(event) => handleChange(event, "hospitalName")}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="education" className="mb-3 block text-base font-medium text-[#07074D]">Education</label>
                        <input
                            type="text"
                            name="education"
                            id="education"
                            placeholder="Enter your education"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.education}
                            onChange={(event) => handleChange(event, "education")}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="licenseNumber" className="mb-3 block text-base font-medium text-[#07074D]">License Number</label>
                        <input
                            type="text"
                            name="licenseNumber"
                            id="licenseNumber"
                            placeholder="Enter your license number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.licenseNumber}
                            onChange={(event) => handleChange(event, "licenseNumber")}
                        />
                    </div>
                    <div className="mb-5 pt-3">
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            Address Details
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="mb-5">
                                <label htmlFor="area" className="mb-3 block text-base font-medium text-[#07074D]">Area</label>
                                <input
                                    type="text"
                                    name="area"
                                    id="area"
                                    placeholder="Enter your area"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.area}
                                    onChange={(event) => handleChange(event, "area")}
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="city" className="mb-3 block text-base font-medium text-[#07074D]">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="Enter your city"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.city}
                                    onChange={(event) => handleChange(event, "city")}
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="state" className="mb-3 block text-base font-medium text-[#07074D]">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    placeholder="Enter your state"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.state}
                                    onChange={(event) => handleChange(event, "state")}
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="postCode" className="mb-3 block text-base font-medium text-[#07074D]">Post Code</label>
                                <input
                                    type="text"
                                    name="postCode"
                                    id="postCode"
                                    placeholder="Enter your post code"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.postCode}
                                    onChange={(event) => handleChange(event, "postCode")}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}




