import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendFormData } from './emailService';

const CRMForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    usingCRM: '',
    employeeCount: '',
    importantFeatures: [],
    industry: '',
    zipCode: '',
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const captchaRef = useRef(null);
  
  // Format for selected option highlighting
  const selectedStyle = 'border-2 border-[#ff8633]';
  const radioSelectedStyle = 'bg-[#ff8633] border-[#ff8633]';
  const radioUnselectedStyle = 'border-gray-400 bg-white';

  // Auto-hide success message after 10 seconds
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
        if (onClose) onClose();
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess, onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (feature) => {
    const updatedFeatures = formData.importantFeatures.includes(feature)
      ? formData.importantFeatures.filter(item => item !== feature)
      : [...formData.importantFeatures, feature];
    
    setFormData({
      ...formData,
      importantFeatures: updatedFeatures
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const resetForm = () => {
    setFormData({
      usingCRM: '',
      employeeCount: '',
      importantFeatures: [],
      industry: '',
      zipCode: '',
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      phoneNumber: ''
    });
    setCurrentStep(1);
    setCaptchaValue(null);
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const TEMPLATE_ID = 'template_rk2suh3';
      // Simulating email send
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      resetForm();
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Sorry, there was a problem submitting your information. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const features = [
    'Lead tracking and management', 
    'Customer service and success',
    'Sales and forecasting tools', 
    '3rd party integrations',
    'Email marketing'
  ];
  const industries = ['Construction', 'Ecommerce', 'Education', 'Financial Services', 'Healthcare', 'Manufacturing', 'Professional Services', 'Real Estate', 'Retail', 'Technology', 'Other'];
        

  // Form step validation
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.usingCRM !== '';
      case 2:
        return formData.employeeCount !== '';
      case 3:
        return formData.importantFeatures.length > 0;
      case 4:
        return formData.industry !== '';
      case 5:
        return formData.zipCode !== '' && formData.zipCode.length === 5;
      case 6:
        return formData.email !== '' && formData.email.includes('@');
      case 7:
        const phoneFormat = /^\d{10}$/;
        return formData.firstName !== '' && 
               formData.lastName !== '' && 
               formData.phoneNumber !== '' &&
               phoneFormat.test(formData.phoneNumber);
      case 8:
        return captchaValue !== null;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center">Are you currently using a CRM?</h2>
            <div className="space-y-2">
              <div 
                className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.usingCRM === 'Yes' ? selectedStyle : ''}`}
                onClick={() => handleRadioChange('usingCRM', 'Yes')}
              >
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="usingCRM" 
                      className="sr-only"
                      checked={formData.usingCRM === 'Yes'}
                      onChange={() => {}}
                    />
                    <div className={`w-4 h-4 border rounded-full flex items-center justify-center 
                      ${formData.usingCRM === 'Yes' ? radioSelectedStyle : radioUnselectedStyle}`}
                    >
                      {formData.usingCRM === 'Yes' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-sm">Yes</span>
                </label>
              </div>
              
              <div 
                className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.usingCRM === 'No' ? selectedStyle : ''}`}
                onClick={() => handleRadioChange('usingCRM', 'No')}
              >
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="usingCRM" 
                      className="sr-only"
                      checked={formData.usingCRM === 'No'}
                      onChange={() => {}}
                    />
                    <div className={`w-4 h-4 border rounded-full flex items-center justify-center 
                      ${formData.usingCRM === 'No' ? radioSelectedStyle : radioUnselectedStyle}`}
                    >
                      {formData.usingCRM === 'No' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-sm">No</span>
                </label>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">Roughly how many employees will need access?</h2>
            <div className="space-y-2">
              {['100+', '50-99', '21-49', '11-20', 'Less than 10'].map(option => (
                <div 
                  key={option}
                  className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.employeeCount === option ? selectedStyle : ''}`}
                  onClick={() => handleRadioChange('employeeCount', option)}
                >
                  <label className="flex items-center cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="radio" 
                        name="employeeCount" 
                        className="sr-only"
                        checked={formData.employeeCount === option}
                        onChange={() => {}}
                      />
                      <div className={`w-4 h-4 border rounded-full flex items-center justify-center 
                        ${formData.employeeCount === option ? radioSelectedStyle : radioUnselectedStyle}`}
                      >
                        {formData.employeeCount === option && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-2 text-sm">{option}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 3:
     
        
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">What features are most important as part of your evaluation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map(feature => (
                <div 
                  key={feature}
                  className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.importantFeatures.includes(feature) ? selectedStyle : ''}`}
                  onClick={() => handleCheckboxChange(feature)}
                >
                  <label className="flex items-center cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        className="sr-only"
                        checked={formData.importantFeatures.includes(feature)}
                        onChange={() => {}}
                      />
                      <div className={`w-4 h-4 border rounded-full flex items-center justify-center 
                        ${formData.importantFeatures.includes(feature) ? radioSelectedStyle : radioUnselectedStyle}`}
                      >
                        {formData.importantFeatures.includes(feature) && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-2 text-sm">{feature}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 4:
       
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">What industry are you in?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {industries.map(industry => (
                <div 
                  key={industry}
                  className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.industry === industry ? selectedStyle : ''}`}
                  onClick={() => handleRadioChange('industry', industry)}
                >
                  <label className="flex items-center cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="radio" 
                        name="industry" 
                        className="sr-only"
                        checked={formData.industry === industry}
                        onChange={() => {}}
                      />
                      <div className={`w-4 h-4 border rounded-full flex items-center justify-center 
                        ${formData.industry === industry ? radioSelectedStyle : radioUnselectedStyle}`}
                      >
                        {formData.industry === industry && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-2 text-sm">{industry}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 5:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">What's your zip code?</h2>
            <div className="mb-4">
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="Enter your zip code"
                maxLength="5"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
              />
              {formData.zipCode && formData.zipCode.length !== 5 && (
                <p className="text-red-500 text-sm mt-1">Please enter a valid 5-digit zip code</p>
              )}
            </div>
          </div>
        );
      
      case 6:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">What's your email address?</h2>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
              />
              {formData.email && !formData.email.includes('@') && (
                <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
              )}
            </div>
          </div>
        );
      
      case 7:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">Tell us about yourself</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number (10 digits)"
                  maxLength="10"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                />
                {formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber) && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid 10-digit phone number</p>
                )}
              </div>
            </div>
          </div>
        );
      
      case 8:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">Verify you're not a robot</h2>
            <div className="flex justify-center mb-4">
              <ReCAPTCHA
                ref={captchaRef}
                sitekey="6LdQQ_MqAAAAAFVMO-x87CxPwWUmJXhIo4g2HI2Z"
                onChange={(value) => setCaptchaValue(value)}
              />
            </div>
          </div>
        );
      
      case 9:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">Summary of your information</h2>
            <div className="space-y-3 text-sm">
              <p><strong>Currently using CRM:</strong> {formData.usingCRM}</p>
              <p><strong>Employee count:</strong> {formData.employeeCount}</p>
              <p><strong>Important features:</strong> {formData.importantFeatures.join(', ')}</p>
              <p><strong>Industry:</strong> {formData.industry}</p>
              <p><strong>Zip code:</strong> {formData.zipCode}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
              <p><strong>Company:</strong> {formData.company}</p>
              <p><strong>Phone:</strong> {formData.phoneNumber}</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {showSuccess ? (
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">Your information has been submitted successfully. We'll be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className="bg-[#ff8633] h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(currentStep / 9) * 100}%` }}
              ></div>
            </div>
            
            {/* Step content */}
            {renderStep()}
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
              )}
              
              {currentStep < 9 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`px-4 py-2 rounded-md ml-auto transition-colors ${
                    isStepValid() 
                      ? 'bg-[#ff8633] text-white hover:bg-[#e67a2e]' 
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded-md ml-auto transition-colors ${
                    isSubmitting
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-[#ff8633] text-white hover:bg-[#e67a2e]'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CRMForm;