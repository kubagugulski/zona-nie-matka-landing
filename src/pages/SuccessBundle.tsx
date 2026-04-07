import React from 'react';
import { Download, CheckCircle, HeartHandshake, AlertCircle, ArrowRight, Check } from 'lucide-react';

export default function SuccessBundle() {
  React.useEffect(() => {
  const fbq = (window as any).fbq;
  if (fbq) {
    fbq('track', 'Purchase', {
      value: 69.00,
      currency: 'PLN',
      content_name: 'Ebook Zona nie matka',
      content_type: 'product'
    });
  }
}, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 py-12 px-6 font-sans flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-rose-100 text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-300 via-orange-300 to-rose-300"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Dziękuję za Twój zakup!</h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Płatność przebiegła pomyślnie. Twoje e-booki oraz bonusowa ściąga "Szybka Riposta" (w e-booku "żona, nie matka") są gotowe do pobrania.
            </p>
            
            <div className="bg-[#FAF6F5] p-6 rounded-2xl border border-rose-100 mb-8 text-left">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center">
                <HeartHandshake className="w-5 h-5 text-rose-500 mr-2" />
                Twoje materiały:
              </h3>
              <div className="space-y-4">
                <a 
                  href="/ebook-zona-nie-matka.pdf" 
                  download
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200 hover:border-rose-300 hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-stone-800 group-hover:text-rose-600 transition-colors">E-book "Żona, nie matka"</span>
                    <span className="text-sm text-stone-500">Format PDF</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                    <Download className="w-5 h-5 text-rose-500" />
                  </div>
                </a>
               
              </div>
              <div className="space-y-4 mt-2">
                <a 
                  href="/ebook-maz-nie-dziecko.pdf" 
                  download
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200 hover:border-rose-300 hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-stone-800 group-hover:text-rose-600 transition-colors">E-book "Mąż, nie dziecko"</span>
                    <span className="text-sm text-stone-500">Format PDF</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                    <Download className="w-5 h-5 text-rose-500" />
                  </div>
                </a>
               
              </div>
            </div>


            {/* Upsell Section - High Converting OTO */}
            <div className="mt-12 mb-12 bg-white p-6 md:p-10 rounded-3xl border-4 border-rose-500 relative text-left shadow-2xl overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-50 via-white to-orange-50 opacity-70 pointer-events-none"></div>
              
              {/* <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white px-8 py-2 rounded-full text-sm md:text-base font-black uppercase tracking-widest shadow-lg whitespace-nowrap animate-pulse">
                🔥 Oferta Jednorazowa 🔥
              </div> */}
              
              <div className="relative z-10 mt-4">
                <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-6 leading-tight text-center">
                  <span className="text-rose-600 block mb-2">Zatrzymaj się na sekundę!</span> 
                  Masz już wiedzę, teraz potrzebujesz planu.
                </h2>
                
                <div className="bg-rose-50 p-6 rounded-2xl mb-8 border border-rose-100 shadow-inner">
                  <p className="text-stone-800 text-lg leading-relaxed mb-4">
                    Właśnie zrobiłaś pierwszy krok, by przestać być menedżerką swojego męża. Ale co zrobisz z tymi wszystkimi godzinami, które za chwilę odzyskasz?
                  </p>
                  <p className="text-stone-800 text-lg leading-relaxed font-medium">
                    Większość kobiet czuje wtedy pustkę. Żebyś nie wróciła do prasowania koszul z nudów, przygotowałam dla Ciebie <br></br><span className="bg-rose-200 px-2 py-1 rounded-md font-bold text-rose-900">„Checklistę: 30 Randek z Samą Sobą”</span>.
                  </p>
                </div>
                
                <div className="space-y-5 mb-10 pl-2 md:pl-4">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0 shadow-sm">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <p className="text-stone-800 text-lg"><strong>30 gotowych pomysłów na randki</strong>, które regenerują kobiecą energię.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0 shadow-sm">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <p className="text-stone-800 text-lg"><strong>Budżet: od 0 do 50 zł.</strong> Nie musisz wydawać fortuny, by poczuć, że żyjesz.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0 shadow-sm">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <p className="text-stone-800 text-lg"><strong>Zero myślenia.</strong> Wybierasz numer i działasz.</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <a 
                    href="https://buy.stripe.com/7sYdRbgIw8E9eUM8iIbMQ04" 
                    className="group relative flex flex-col items-center justify-center w-full py-5 px-4 md:px-8 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:from-rose-600 hover:to-orange-600 transition-all duration-300 shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:shadow-[0_0_50px_rgba(244,63,94,0.6)] transform hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                    
                    <span className="text-xl md:text-2xl font-black mb-2 flex items-center text-center drop-shadow-md">
                      DODAJ DO ZAMÓWIENIA ZA JEDYNE 29 ZŁ <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <span className="text-rose-100 text-base md:text-lg font-medium text-center bg-black/10 px-4 py-1 rounded-full">
                       zacznij odzyskiwać siebie już dziś!
                    </span>
                  </a>
                 
                </div>
              </div>
            </div>
            
            <div className="flex items-start text-left bg-stone-50 p-4 rounded-xl border border-stone-200">
              <AlertCircle className="w-5 h-5 text-stone-400 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-stone-500">
                <strong>Ważne:</strong> Zapisz tę stronę w zakładkach lub pobierz pliki od razu. Kopia zapasowa linków została również wysłana na Twój adres e-mail podany podczas zamówienia (sprawdź folder SPAM, jeśli jej nie widzisz).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
