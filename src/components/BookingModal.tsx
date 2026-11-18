import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';
import { VEHICLES, BUSINESS_INFO } from '../data/siteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVehicleId?: string;
  initialData?: {
    serviceType?: string;
    pickupLocation?: string;
    dropoffLocation?: string;
    pickupDate?: string;
    pickupTime?: string;
    passengers?: number;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedVehicleId,
  initialData,
}) => {
  const [step, setStep] = useState(1);
  const [vehicleId, setVehicleId] = useState(preselectedVehicleId || 'toyota-alphard');
  const [serviceType, setServiceType] = useState(initialData?.serviceType || 'Changi Airport Transfer');
  const [pickup, setPickup] = useState(initialData?.pickupLocation || 'Changi Airport Terminal 3');
  const [dropoff, setDropoff] = useState(initialData?.dropoffLocation || 'Marina Bay Sands Hotel');
  const [date, setDate] = useState(initialData?.pickupDate || '2026-11-20');
  const [time, setTime] = useState(initialData?.pickupTime || '14:30');
  const [passengers, setPassengers] = useState(initialData?.passengers || 2);
  const [flightNumber, setFlightNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [specialRequests, setSpecialRequests] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSubmitted(false);
      setValidationError('');
      if (preselectedVehicleId) setVehicleId(preselectedVehicleId);
      if (initialData?.serviceType) setServiceType(initialData.serviceType);
      if (initialData?.pickupLocation) setPickup(initialData.pickupLocation);
      if (initialData?.dropoffLocation) setDropoff(initialData.dropoffLocation);
      if (initialData?.pickupDate) setDate(initialData.pickupDate);
      if (initialData?.pickupTime) setTime(initialData.pickupTime);
      if (initialData?.passengers) setPassengers(initialData.passengers);
    }
  }, [isOpen, preselectedVehicleId, initialData]);

  if (!isOpen) return null;

  const selectedVehicle = VEHICLES.find((v) => v.id === vehicleId) || VEHICLES[1];

  const isMidnight = (() => {
    const hour = parseInt(time.split(':')[0] || '12', 10);
    return hour >= 23 || hour < 6;
  })();

  const baseFare = serviceType.includes('Hourly')
    ? selectedVehicle.hourlyRate * selectedVehicle.minHours
    : serviceType.includes('Airport')
    ? selectedVehicle.airportRate
    : serviceType.includes('Malaysia')
    ? vehicleId === 'mercedes-v-class'
      ? 190
      : 160
    : selectedVehicle.transferRate;

  const totalFare = baseFare + (isMidnight ? 15 : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.includes('@')) {
      setValidationError('Please enter your name, a valid email address, and a reachable phone or WhatsApp number.');
      return;
    }
    setValidationError('');
    setIsSubmitted(true);
  };

  const whatsappBookingUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
    `Hello Limo Singapore, I would like to confirm:\nVehicle: ${selectedVehicle.name}\nService: ${serviceType}\nPickup: ${pickup}\nDropoff: ${dropoff}\nDate/Time: ${date} ${time}\nPassengers: ${passengers}${
      flightNumber ? `\nFlight: ${flightNumber}` : ''
    }\nEstimated Fare: SGD $${totalFare}`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <div className="surface-card w-full max-w-2xl rounded-xl border border-white/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="px-6 py-4 bg-[#0D0D10] border-b border-white/10 flex items-center justify-between shrink-0">
          <div>
            <h2 id="booking-modal-title" className="font-serif text-xl font-bold text-white">
              Reserve Chauffeur
            </h2>
            <p className="text-xs text-slate-400">
              Fixed all-inclusive SGD quotes · 24/7 WhatsApp & hotline confirmation
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking modal"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-2xl font-bold text-white">Reservation Request Logged</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{name}</strong>. Our dispatch desk will confirm chauffeur details for your <strong className="text-[#E5C158]">{selectedVehicle.name}</strong> via WhatsApp and email.
                </p>
              </div>

              <div className="bg-[#0A0A0C] p-4 rounded-xl border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Service</span>
                  <span className="text-white font-medium">{serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Route</span>
                  <span className="text-white font-medium truncate max-w-[230px]">
                    {pickup} → {dropoff}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Date & Time</span>
                  <span className="text-white font-mono tabular-nums">
                    {date} · {time}
                  </span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2">
                  <span className="text-slate-400">Fixed Fare</span>
                  <span className="text-[#E5C158] font-mono font-semibold tabular-nums">SGD ${totalFare}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Details on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Step progress */}
              <div className="grid grid-cols-3 gap-2 pb-3 border-b border-white/10 text-xs">
                <span className={step === 1 ? 'text-[#E5C158] font-semibold' : 'text-slate-500'}>
                  01. Vehicle & Service
                </span>
                <span className={step === 2 ? 'text-[#E5C158] font-semibold' : 'text-slate-500'}>
                  02. Route & Flight
                </span>
                <span className={step === 3 ? 'text-[#E5C158] font-semibold' : 'text-slate-500'}>
                  03. Contact & Confirm
                </span>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="modal-service" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Service Type
                    </label>
                    <select
                      id="modal-service"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="Changi Airport Transfer">Changi Airport Transfer (60-min free wait)</option>
                      <option value="City / Hotel Point-to-Point">City / Hotel Point-to-Point Transfer</option>
                      <option value="Hourly Chauffeur Charter">Hourly Chauffeur Charter (Min 3 hrs)</option>
                      <option value="Singapore to Malaysia Cross-Border">Singapore to Malaysia Cross-Border</option>
                      <option value="Wedding Limousine Charter">Wedding Limousine Charter</option>
                      <option value="Corporate Roadshow">Corporate Executive Roadshow</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="modal-vehicle" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Vehicle Selection
                    </label>
                    <select
                      id="modal-vehicle"
                      value={vehicleId}
                      onChange={(e) => setVehicleId(e.target.value)}
                      className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                    >
                      {VEHICLES.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name} — From SGD ${v.transferRate} ({v.passengers} pax · {v.luggage} bags)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-[#0A0A0C] p-3.5 rounded-lg border border-white/10 flex items-center gap-4">
                    <img
                      src={selectedVehicle.image}
                      alt={selectedVehicle.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-24 h-16 object-cover rounded-md shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="font-serif text-base font-bold text-white truncate">{selectedVehicle.name}</h3>
                      <p className="text-xs text-slate-400">
                        {selectedVehicle.passengers} passengers · {selectedVehicle.luggage} suitcases · {selectedVehicle.cabinBags} cabin bags
                      </p>
                      <p className="text-xs text-[#E5C158] font-mono tabular-nums mt-0.5">
                        Estimated total: SGD ${totalFare}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full gold-gradient-bg text-black font-semibold text-sm py-3 rounded-lg cursor-pointer"
                  >
                    Continue to Route Details
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-pickup" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Pickup Location
                      </label>
                      <input
                        id="modal-pickup"
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        required
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-dropoff" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Dropoff Location
                      </label>
                      <input
                        id="modal-dropoff"
                        type="text"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        required
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="modal-date" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Date
                      </label>
                      <input
                        id="modal-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-time" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Pickup Time
                      </label>
                      <input
                        id="modal-time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-pax" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Passengers
                      </label>
                      <input
                        id="modal-pax"
                        type="number"
                        min={1}
                        max={7}
                        value={passengers}
                        onChange={(e) => setPassengers(Number(e.target.value))}
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  {serviceType.includes('Airport') && (
                    <div>
                      <label htmlFor="modal-flight" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Flight Number (Changi Flight Radar Sync)
                      </label>
                      <input
                        id="modal-flight"
                        type="text"
                        placeholder="e.g. SQ 321 or EK 354"
                        value={flightNumber}
                        onChange={(e) => setFlightNumber(e.target.value)}
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="modal-notes" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Luggage & Child Seat Notes
                    </label>
                    <textarea
                      id="modal-notes"
                      placeholder="Specify suitcase count, infant/booster seat (+SGD $15), or name board text"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2 text-sm text-slate-100 h-16 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-300 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-[2] gold-gradient-bg text-black font-semibold text-sm py-3 rounded-lg cursor-pointer"
                    >
                      Continue to Contact Info
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="modal-name"
                        type="text"
                        placeholder="Passenger or coordinator name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Mobile / WhatsApp Number
                      </label>
                      <input
                        id="modal-phone"
                        type="tel"
                        placeholder="+65 9XXX XXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-pay" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Payment Preference
                      </label>
                      <select
                        id="modal-pay"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                      >
                        <option value="Credit Card">Credit Card (Visa / Mastercard / AMEX)</option>
                        <option value="PayNow">PayNow / SGQR</option>
                        <option value="Corporate Account">Corporate Monthly Invoice</option>
                      </select>
                    </div>
                  </div>

                  {validationError && (
                    <p role="alert" className="text-xs text-rose-400 bg-rose-950/40 border border-rose-500/30 rounded-lg px-3 py-2">
                      {validationError}
                    </p>
                  )}

                  <div className="bg-[#0A0A0C] p-4 rounded-lg border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">
                        All-inclusive fixed fare {isMidnight ? '(includes +SGD $15 midnight dispatch)' : '(ERP & parking included)'}
                      </span>
                    </div>
                    <span className="text-xl font-mono font-bold text-[#E5C158] tabular-nums">
                      SGD ${totalFare}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-300 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-[2] gold-gradient-bg text-black font-semibold text-sm py-3 rounded-lg cursor-pointer"
                    >
                      Confirm Reservation Request
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
