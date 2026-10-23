import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WhatsAppButton = () => {
  
  const phoneNumber = '254715175508' 
  const message = 'Hello Dennizo, I would like to inquire about your services.'
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      // The 'group' class allows us to animate the text when the whole button is hovered
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center gap-3 bg-[#25D366] text-white p-4 md:px-6 md:py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl md:text-xl" />
      
      {/* Text is hidden on mobile to save space, but shows on desktop. 
          We use max-w-0 and opacity-0 to make it collapse smoothly when not hovered. */}
      <span className="hidden md:block font-semibold text-sm whitespace-nowrap max-w-0 overflow-hidden opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
        Chat on WhatsApp
      </span>
    </a>
  )
}

export default WhatsAppButton