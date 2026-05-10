import whatsapp from '../../src/assets/whatsappicon.svg'

const WhatsAppFloating = () => {
  const phoneNumber = "966536499916"; // removed spaces for the link
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center group"
    >
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 transform hover:scale-110 active:scale-95 overflow-hidden">
        {/* Pulsing effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="w-10 h-10 relative z-10"
        />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
        <div className="bg-gray-900 text-white text-[11px] px-3 py-1.5 rounded-xl shadow-2xl whitespace-nowrap">
          WhatsApp Us
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloating;