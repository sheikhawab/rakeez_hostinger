import whatsapp from '../../src/assets/whatsappicon.svg'
// import whatsapp from '../../src/assets/whatsapp.svg'

const WhatsAppFloating = () => {
  const phoneNumber = "966 536499916"; // apna WhatsApp number
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 rounded-full transition-colors z-50"
    >
      <img
        src={whatsapp}
        alt="WhatsApp"

      />
    </a>
  );
};

export default WhatsAppFloating;