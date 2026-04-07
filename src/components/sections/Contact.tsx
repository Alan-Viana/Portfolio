import { motion } from 'framer-motion';
import { RetroGlobe } from '@/components/ui/RetroGlobe';
import { transitions, variants } from '@/utils/animations';
import { formatPhone, isValidEmail } from '@/utils/formatters';
import { useState } from 'react';
import { content } from '@/data/content';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: { [key: string]: string } = {};
    const email = formData.get('email') as string;
    const phoneValue = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    if (!email || !isValidEmail(email)) {
      newErrors.email = 'Por favor, insira um email válido.';
    }

    if (!formData.get('name')) {
      newErrors.name = 'Nome é obrigatório.';
    }
    
    if (!formData.get('subject')) {
      newErrors.subject = 'Assunto é obrigatório.';
    }
    
    if (!message) {
      newErrors.message = 'Mensagem é obrigatória.';
    } else if (message.length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    }

    if (phoneValue) {
      const digits = phoneValue.replace(/\D/g, '');
      if (digits.length < 10) {
        newErrors.phone = 'Telefone inválido (mínimo 10 dígitos).';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!validateForm(formData)) {
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${import.meta.env.VITE_EMAIL_TO}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setPhone('');
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-[80dvh] py-16 md:py-24 lg:py-28 2xl:py-32 bg-slate-800 dark:bg-black text-white dark:text-[#33ff33] relative overflow-hidden transition-colors duration-300 flex flex-col justify-center scroll-mt-28">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)',
             WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)'
           }} 
      />

      <div 
        className="w-full max-w-[90vw] lg:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 2xl:gap-12 items-center overflow-hidden">
          
          <motion.div 
            initial={variants.fadeInUp.initial}
            whileInView={variants.fadeInUp.whileInView}
            viewport={variants.fadeInUp.viewport}
            transition={transitions.smooth}
            className="w-full xs:w-[80vw] sm:w-[60vw] md:w-full max-w-[400px] aspect-square mx-auto flex flex-col items-center justify-center relative order-2 md:order-1 lg:order-2"
          >
            <RetroGlobe className="opacity-60" />
            <div className="flex items-center gap-6 mt-8">
              <a href={content.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 dark:text-[#33ff33] hover:text-white dark:hover:text-white transition-colors transform hover:-translate-y-1">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={content.social.github} target="_blank" rel="noopener noreferrer" className="text-white/60 dark:text-[#33ff33] hover:text-white dark:hover:text-white transition-colors transform hover:-translate-y-1">
                <span className="sr-only">GitHub</span>
                <svg className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>

          <div 
            className="text-left order-1 md:order-2 lg:order-1 w-full max-w-lg mx-auto lg:mx-0"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-display font-medium mb-4 text-white dark:text-[#33ff33] tracking-tight transition-colors pb-1 whitespace-nowrap">{content.contact.title}</h2>
            <p className="text-white text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl font-sans transition-colors">
              {content.contact.subtitle}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mb-8 sm:mb-12" noValidate>
              <input type="hidden" name="_subject" value="Novo contato do Portfolio!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm text-white/80 dark:text-[#33ff33] uppercase tracking-wider transition-colors">{content.contact.form.name}</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full bg-white dark:bg-black border ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-[#33ff33]'} text-slate-900 dark:text-[#33ff33] placeholder:text-slate-400 dark:placeholder:text-[#33ff33]/50 px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-[#33ff33] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#33ff33] transition-all text-sm`}
                    placeholder={content.contact.form.namePlaceholder}
                  />
                  {errors.name && <span id="name-error" className="text-red-400 text-xs">{errors.name}</span>}
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm text-white/80 dark:text-[#33ff33] uppercase tracking-wider transition-colors">{content.contact.form.email}</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full bg-white dark:bg-black border ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-[#33ff33]'} text-slate-900 dark:text-[#33ff33] placeholder:text-slate-400 dark:placeholder:text-[#33ff33]/50 px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-[#33ff33] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#33ff33] transition-all text-sm`}
                    placeholder={content.contact.form.emailPlaceholder}
                  />
                  {errors.email && <span id="email-error" className="text-red-400 text-xs">{errors.email}</span>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-sm text-white/80 dark:text-[#33ff33] uppercase tracking-wider transition-colors">{content.contact.form.phone} <span className="text-[10px] lowercase opacity-70">(opcional)</span></label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    autoComplete="tel"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`w-full bg-white dark:bg-black border ${errors.phone ? 'border-red-500' : 'border-slate-300 dark:border-[#33ff33]'} text-slate-900 dark:text-[#33ff33] placeholder:text-slate-400 dark:placeholder:text-[#33ff33]/50 px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-[#33ff33] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#33ff33] transition-all text-sm`}
                    placeholder={content.contact.form.phonePlaceholder}
                  />
                  {errors.phone && <span id="phone-error" className="text-red-400 text-xs">{errors.phone}</span>}
                </div>
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-sm text-white/80 dark:text-[#33ff33] uppercase tracking-wider transition-colors">{content.contact.form.subject}</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={`w-full bg-white dark:bg-black border ${errors.subject ? 'border-red-500' : 'border-slate-300 dark:border-[#33ff33]'} text-slate-900 dark:text-[#33ff33] placeholder:text-slate-400 dark:placeholder:text-[#33ff33]/50 px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-[#33ff33] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#33ff33] transition-all text-sm`}
                    placeholder={content.contact.form.subjectPlaceholder}
                  />
                  {errors.subject && <span id="subject-error" className="text-red-400 text-xs">{errors.subject}</span>}
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm text-white/80 dark:text-[#33ff33] uppercase tracking-wider transition-colors">{content.contact.form.message}</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  rows={4}
                  className={`w-full bg-white dark:bg-black border ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-[#33ff33]'} text-slate-900 dark:text-[#33ff33] placeholder:text-slate-400 dark:placeholder:text-[#33ff33]/50 px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-[#33ff33] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#33ff33] transition-all text-sm`}
                  placeholder={content.contact.form.messagePlaceholder}
                ></textarea>
                {errors.message && <span id="message-error" className="text-red-400 text-xs">{errors.message}</span>}
              </div>

              <div className="flex flex-col items-center mt-8 sm:mt-12 gap-4">
                <motion.button 
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`win95-btn w-full sm:w-auto px-8 py-3 font-bold font-sans text-slate-900 dark:text-[#33ff33] active:translate-y-[1px] transition-none flex items-center justify-center gap-3 ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.05 },
                    tap: { scale: 0.95 }
                  }}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Mensagem Enviada!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 4h20v16H2V4zm2 3.5l8 5 8-5V18H4V7.5zm16-2H4l8 5 8-5z" />
                      </svg>
                      {content.contact.form.submit}
                    </>
                  )}
                </motion.button>
              </div>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500 text-green-200 text-sm text-center"
                >
                  Mensagem enviada com sucesso! Retornarei em breve.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500 text-red-200 text-sm text-center"
                >
                  Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                </motion.div>
              )}
            </form>
          </div>          
        </div>

      </div>
      <p className="absolute bottom-4 left-0 w-full text-white/60 dark:text-slate-500 dark:opacity-60 text-xs text-center">
        {content.contact.footer}
      </p>
    </section>
  );
};
