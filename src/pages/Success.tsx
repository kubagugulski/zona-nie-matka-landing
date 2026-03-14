import React from 'react';
import { Download, CheckCircle, HeartHandshake, AlertCircle } from 'lucide-react';

export default function Success() {
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
              Płatność przebiegła pomyślnie. Twój e-book oraz bonusowa ściąga "Szybka Riposta" są gotowe do pobrania.
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
