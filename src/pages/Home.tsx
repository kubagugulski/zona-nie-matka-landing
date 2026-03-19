import React, {useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, HeartHandshake, MessageCircle, Quote, X, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const navigate = useNavigate();
  const [showGamePopup, setShowGamePopup] = useState(false);
  const [showMiniIcon, setShowMiniIcon] = useState(false);
  const faqRef = useRef<HTMLElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Wyświetlamy popup po przescrollowaniu, ale tylko raz po załadowaniu strony
        if (entry.isIntersecting && !hasTriggered.current) {
          setShowGamePopup(true);
          hasTriggered.current = true;
        }
      },
      { threshold: 0.2 } // Uruchom, gdy 20% sekcji FAQ będzie widoczne
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  const handlePlayGame = () => {
    setShowGamePopup(false);
    navigate('/gra');
  };

  const handleClosePopup = () => {
    setShowGamePopup(false);
    setShowMiniIcon(true);
  };

  const handleOpenFromIcon = () => {
    setShowMiniIcon(false);
    setShowGamePopup(true);
  };

  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-rose-200 selection:text-stone-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 lg:py-32">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-1/4 -right-24 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white text-rose-600 border border-rose-100 shadow-sm text-sm font-semibold mb-6 tracking-wide uppercase">
            Dla zmęczonych kobiet
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-stone-900">
            Przestań być „Kierownikiem Projektu” w swoim małżeństwie.
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Odzyskaj partnera, namiętność i własny spokój w 14 dni. Bez wywoływania wojny domowej i cichych dni.
          </p>
          <a
            href="#oferta"
            onClick={scrollToOffer}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1"
          >
            Odzyskaj spokój <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Diagnostyczna (Problem) */}
      <section className="py-20 px-6 bg-white relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <AlertCircle className="w-12 h-12 text-rose-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">Czy to brzmi znajomo?</h2>
          <div className="space-y-6 text-lg text-stone-700">
            <div className="flex items-start bg-rose-50/50 p-4 rounded-2xl border border-rose-100/50">
              <div className="shrink-0 mt-1.5 mr-4">
                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              </div>
              <p><strong>Poprawiasz naczynia w zmywarce</strong>, bo „on to zrobił źle” i wolisz to zrobić po swojemu?</p>
            </div>
            <div className="flex items-start bg-rose-50/50 p-4 rounded-2xl border border-rose-100/50">
              <div className="shrink-0 mt-1.5 mr-4">
                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              </div>
              <p><strong>Przypominasz mu o wszystkim:</strong> o wizycie u dentysty, urodzinach jego własnej matki i zapłaceniu rachunków?</p>
            </div>
            <div className="flex items-start bg-rose-50/50 p-4 rounded-2xl border border-rose-100/50">
              <div className="shrink-0 mt-1.5 mr-4">
                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              </div>
              <p>Złapałaś się na tym, że <strong>mówisz do niego tym samym tonem, co do dzieci?</strong></p>
            </div>
            <div className="flex items-start bg-rose-50/50 p-4 rounded-2xl border border-rose-100/50">
              <div className="shrink-0 mt-1.5 mr-4">
                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              </div>
              <p>Czujesz, że jeśli Ty o czymś nie pomyślisz, to to się po prostu <strong>nie wydarzy?</strong></p>
            </div>
          </div>
          <div className="mt-12 p-8 bg-rose-50 rounded-3xl border border-rose-200 text-center shadow-sm">
            <p className="text-xl font-medium text-stone-800">
              Jeśli kiwasz głową, to znak, że wpadłaś w pułapkę bycia „matką” własnego męża.
            </p>
          </div>
        </div>
      </section>

      {/* Emocjonalna (Ból) */}
      <section className="py-20 px-6 bg-[#FAF6F5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-stone-900">Ogromny koszt bycia „Matką”</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Kiedy stajesz się nianią, menedżerem i przypominajką, zabijasz dwie najważniejsze rzeczy w Waszym związku: <strong className="text-rose-700">jego sprawczość i Wasze pożądanie.</strong>
              </p>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Trudno czuć pociąg seksualny do kogoś, kogo musisz prosić o wyniesienie śmieci. Trudno mu być męskim partnerem, kiedy traktujesz go jak niesfornego nastolatka, którego trzeba kontrolować.
              </p>
              <p className="text-lg text-stone-800 leading-relaxed font-semibold">
                Wypalenie, frustracja i samotność w relacji to nie wina „złego charakteru”, ale ról, w które nieświadomie weszliście. Czas z nich wyjść.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-rose-100 shadow-xl relative transform md:rotate-2">
              <div className="absolute -top-6 -left-6 text-rose-200">
                <Quote className="w-16 h-16 fill-current" />
              </div>
              <p className="text-xl italic text-stone-600 relative z-10 leading-relaxed">
                „Czułam się, jakbym miała trójkę dzieci, z czego jedno ma 36 lat i zarost. Byłam wykończona ciągłym myśleniem za nas dwoje. Zamiast męża, miałam w domu kolejnego podopiecznego.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rozwiązania */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <HeartHandshake className="w-16 h-16 mx-auto text-rose-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900">14-dniowy Detoks od Odpowiedzialności</h2>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            To nie jest kolejny poradnik o tym, jak „więcej rozmawiać”. To konkretny, dwutygodniowy system, który krok po kroku zdejmie z Twoich barków ciężar zarządzania dorosłym człowiekiem.
          </p>
          <p className="text-lg text-stone-700 mb-10 bg-orange-50 p-6 rounded-2xl border border-orange-100">
            Nauczysz się odpuszczać bez poczucia winy i sprawisz, że on sam zacznie przejmować inicjatywę. <strong className="text-rose-700">Bez kłótni, bez cichych dni, bez szantażu emocjonalnego.</strong>
          </p>
          <a
            href="#oferta"
            onClick={scrollToOffer}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1"
          >
            Przestań być nianią <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Szczegółowa Oferta (Value Stack) */}
      <section id="oferta" className="py-24 px-6 bg-[#FDFBF7] scroll-mt-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900">Ebook „Żona, nie matka”</h2>
            <p className="text-xl text-stone-600">System odzyskiwania partnerstwa. Co dokładnie znajdziesz w środku?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Rozdział 1: Test „Żona czy Kierownik Projektu?”",
                desc: "Zdiagnozuj swoje zachowania i zobacz czarno na białym, gdzie dokładnie tracisz energię i przejmujesz jego obowiązki."
              },
              {
                title: "Rozdział 2: Psychologia ról",
                desc: "Zrozum, jak wychowanie i schematy wbiły Cię w rolę wiecznej opiekunki. Dowiedz się, jak z tego wyjść bez poczucia winy."
              },
              {
                title: "Rozdział 3: Koszt bycia „Matką”",
                desc: "Brutalna prawda o tym, jak nadopiekuńczość zabija popęd seksualny i sprawczość Twojego męża. Zobacz mechanizmy, które niszczą bliskość."
              },
              {
                title: "Rozdział 4: Detoks od odpowiedzialności",
                desc: "Twój gotowy, 14-dniowy plan działania krok po kroku. Odzyskaj wolność i przestań kontrolować, bez wywoływania konfliktów."
              },
              {
                title: "Rozdział 5: Komunikacja bez zrzędzenia",
                desc: "Jak prosić, by zostać usłyszaną. Poznaj zmianę komunikatu, która działa jak magia i sprawia, że on sam chce działać."
              },
              {
                title: "Rozdział 6: Randka z samą sobą",
                desc: "Odzyskiwanie kobiecości, własnej przestrzeni i tożsamości poza związkiem. Przypomnij sobie, kim jesteś, gdy nie musisz o nikogo dbać."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-rose-100 hover:border-rose-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-rose-500 mr-3 shrink-0" />
                  <h3 className="text-xl font-bold text-stone-800">{item.title}</h3>
                </div>
                <p className="text-stone-600 leading-relaxed pl-9">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mockup & Główne CTA */}
          <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl border border-rose-100 relative overflow-hidden">
            {/* Subtle background gradient for the CTA box */}
            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-rose-50/80 to-transparent pointer-events-none"></div>
            
            <div className="md:w-1/2 flex justify-center relative z-10">
              {/* CSS Ebook Mockup */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 bg-white rounded-r-2xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-6 text-center border-l-8 border-rose-300 transform transition-transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-tr from-rose-100 to-orange-50 rounded-r-2xl rounded-l-sm opacity-90"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-serif leading-tight">Żona,<br/>nie matka</h3>
                  <div className="w-12 h-1 bg-rose-400 mx-auto mb-6"></div>
                  <p className="text-stone-600 text-sm md:text-base uppercase tracking-widest font-medium">System odzyskiwania partnerstwa</p>
                </div>
                <div className="absolute bottom-6 right-6 text-rose-300">
                  <HeartHandshake className="w-8 h-8 opacity-80" />
                </div>
                {/* Book spine effect */}
                <div className="absolute top-0 left-0 w-4 h-full bg-linear-to-r from-black/10 to-transparent rounded-l-sm"></div>
                {/* Page edges effect */}
                <div className="absolute top-2 right-0 w-1 h-[calc(100%-16px)] bg-stone-100 rounded-r-sm opacity-80"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-700 text-sm font-bold mb-4 tracking-wide uppercase">
                Oferta Specjalna
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Gotowa na zmianę?</h3>
              <p className="text-lg text-stone-600 mb-8">
                Odbierz natychmiastowy dostęp do e-booka oraz bonusowej ściągi „Szybka Riposta”. Zacznij 14-dniowy detoks już dziś.
              </p>
              
              <div className="mb-8">
                <p className="text-5xl font-bold text-rose-600">69 PLN <span className="text-xl text-stone-400 line-through font-normal ml-2">149 PLN</span></p>
              </div>
              
              <a 
                onClick={() => {
                const fbq = (window as any).fbq;
                if (fbq) fbq('track', 'InitiateCheckout');
              }}
                href="https://buy.stripe.com/aFa28tbocf2x3c442sbMQ03" 
                className="w-full md:w-auto px-10 py-5 text-xl font-bold rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1">
                Kupuję i odzyskuję spokój
              </a>
              
              <div className="flex items-center mt-6 text-stone-500 text-sm font-medium">
                <ShieldCheck className="w-5 h-5 mr-2 text-rose-400" />
                <span>14 dni gwarancji satysfakcji</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prezentacja Bonusu */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-64 bg-rose-50 rounded-2xl border border-rose-200 flex items-center justify-center shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center px-4">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-rose-400" />
                  <span className="font-bold text-lg block text-stone-800">Ściąga</span>
                  <span className="text-rose-600 font-medium text-sm">Szybka Riposta</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <span className="text-rose-500 font-bold tracking-widest uppercase text-sm mb-2 block">Bonus Specjalny</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900">Ściąga „Szybka Riposta”</h2>
              <p className="text-lg text-stone-600 mb-6">
                Boisz się konfrontacji? Nie wiesz, co powiedzieć, gdy on znów zrzuca na Ciebie odpowiedzialność? Ta ściąga to Twoja tarcza. Gotowe skrypty odpowiedzi, które ucinają matkowanie w zarodku.
              </p>
              <div className="space-y-4 bg-orange-50 p-8 rounded-3xl border border-orange-100 shadow-sm">
                <div>
                  <p className="text-stone-500 text-sm mb-1">Gdy on pyta:</p>
                  <p className="font-bold text-stone-800">„Gdzie są moje klucze?”</p>
                  <p className="text-rose-600 text-sm mt-3 mb-1 font-medium">Twoja riposta:</p>
                  <p className="font-medium text-stone-700 italic">„Ostatnio widziałam je tam, gdzie je zostawiłeś. Wierzę, że je znajdziesz.”</p>
                </div>
                <div className="h-px bg-orange-200 my-4"></div>
                <div>
                  <p className="text-stone-500 text-sm mb-1">Gdy on mówi:</p>
                  <p className="font-bold text-stone-800">„Nie mówiłaś mi, że mamy dzisiaj gości!”</p>
                  <p className="text-rose-600 text-sm mt-3 mb-1 font-medium">Twoja riposta:</p>
                  <p className="font-medium text-stone-700 italic">„Wpisałam to do naszego wspólnego kalendarza w zeszłym tygodniu. Sprawdź proszę.”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja Zaufania/Case Study */}
      <section ref={faqRef} className="py-24 px-6 bg-[#FAF6F5]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-stone-900">Z perspektywy kobiety, która to przeszła</h2>
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-lg border border-rose-100 text-left relative">
            <div className="absolute -top-6 -left-6 text-rose-200">
              <Quote className="w-16 h-16 fill-current" />
            </div>
            <p className="text-lg text-stone-700 leading-relaxed mb-8 relative z-10 italic">
              „Kiedy przestałam mu przypominać o wszystkim, na początku był chaos. Zapomniał o przeglądzie auta. Ale po tygodniu... zaczął sam ustawiać sobie przypomnienia. Przestałam zrzędzić, a on zaczął działać. Wczoraj sam zorganizował nam wieczór. Pierwszy raz od lat poczułam się jak jego kobieta, a nie jego matka.”
            </p>
            <div className="flex items-center">
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-xl mr-4 border border-rose-200">
                A
              </div>
              <div>
                <p className="font-bold text-stone-900 text-lg">Anna</p>
                <p className="text-sm text-stone-500">34 lata, w związku od 8 lat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja FAQ & Domknięcie */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-stone-900">Najczęściej zadawane pytania</h2>
          <div className="space-y-8 mb-16">
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-stone-100">
              <h3 className="text-xl font-bold mb-3 flex items-start text-stone-800">
                <span className="text-rose-400 mr-3">Q:</span> Czy on się na mnie nie obrazi?
              </h3>
              <p className="text-stone-600 leading-relaxed pl-9">
                System jest zaprojektowany tak, by oddawać odpowiedzialność z szacunkiem, a nie przez atak. Zmiana dynamiki wyjdzie na dobre Wam obojgu – on odzyska sprawczość, a Ty spokój.
              </p>
            </div>
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-stone-100">
              <h3 className="text-xl font-bold mb-3 flex items-start text-stone-800">
                <span className="text-rose-400 mr-3">Q:</span> A co, jeśli on nic nie zrobi i dom zarośnie brudem?
              </h3>
              <p className="text-stone-600 leading-relaxed pl-9">
                W ebooku szczegółowo omawiamy „fazę chaosu” i pokazujemy, jak ją przetrwać bez łamania się i wracania do starych nawyków.
              </p>
            </div>
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-stone-100">
              <h3 className="text-xl font-bold mb-3 flex items-start text-stone-800">
                <span className="text-rose-400 mr-3">Q:</span> W jakiej formie otrzymam e-booka?
              </h3>
              <p className="text-stone-600 leading-relaxed pl-9">
                E-book oraz bonusowa ściąga są produktami cyfrowymi. Od razu po opłaceniu zamówienia otrzymasz na podany adres e-mail linki do pobrania materiałów w wygodnym formacie PDF, który otworzysz na telefonie, tablecie lub komputerze.
              </p>
            </div>
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-stone-100">
              <h3 className="text-xl font-bold mb-3 flex items-start text-stone-800">
                <span className="text-rose-400 mr-3">Q:</span> Czy ten system zadziała, jeśli mój mąż jest bardzo uparty?
              </h3>
              <p className="text-stone-600 leading-relaxed pl-9">
                Tak. System opiera się na zmianie Twojego zachowania, a nie na próbach "naprawienia" męża. Kiedy Ty przestajesz pełnić rolę matki, dynamika związku musi się zmienić. To działa niezależnie od jego uporu, ponieważ zdejmujesz z siebie ciężar, którego on już nie może na Ciebie zrzucić.
              </p>
            </div>
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-stone-100">
              <h3 className="text-xl font-bold mb-3 flex items-start text-stone-800">
                <span className="text-rose-400 mr-3">Q:</span> Czy płatność jest w 100% bezpieczna?
              </h3>
              <p className="text-stone-600 leading-relaxed pl-9">
                Absolutnie tak. Płatności są obsługiwane przez globalnego operatora Stripe, który gwarantuje najwyższe standardy bezpieczeństwa. Możesz zapłacić wygodnie kartą, BLIKiem lub szybkimi przelewami.
              </p>
            </div>
          </div>

          <div className="bg-rose-50 rounded-3xl p-8 md:p-12 text-center border border-rose-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-rose-300 via-orange-300 to-rose-300"></div>
            <ShieldCheck className="w-16 h-16 mx-auto text-rose-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-stone-900">Gwarancja Satysfakcji</h3>
            <p className="text-stone-600 mb-8 max-w-lg mx-auto">
              Masz 14 dni na przetestowanie systemu. Jeśli uznasz, że to nie dla Ciebie i nie widzisz żadnych zmian, zwrócimy Ci 100% pieniędzy. Bez zadawania pytań.
            </p>
            
            <div className="flex flex-col items-center">
              <a 
                onClick={() => {
                const fbq = (window as any).fbq;
                if (fbq) fbq('track', 'InitiateCheckout');
              }}
                href="https://buy.stripe.com/aFa28tbocf2x3c442sbMQ03"
                className="w-full md:w-auto px-10 py-5 text-xl font-bold rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1"
              >
                Kupuję i odzyskuję spokój
              </a>
              <p className="text-sm text-stone-500 mt-4 font-medium">Natychmiastowy dostęp do Ebooka + Bonusu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 text-stone-500 py-12 px-6 text-center mt-auto border-t border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="mb-6 font-medium">© {new Date().getFullYear()} Żona, nie matka. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-6 text-sm">
            <Link to="/regulamin" className="hover:text-rose-600 transition-colors">Regulamin</Link>
            <Link to="/polityka-prywatnosci" className="hover:text-rose-600 transition-colors">Polityka Prywatności</Link>
          </div>
        </div>
      </footer>

      {/* Game Popup */}
      <AnimatePresence>
        {showGamePopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl border border-rose-100 max-w-md w-full p-8 relative overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-rose-100 rounded-full mix-blend-multiply filter blur-2xl opacity-60 pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-60 pointer-events-none"></div>

              
              <button 
                onClick={handleClosePopup}
                className="absolute top-4 right-4 z-20 text-stone-400 hover:text-stone-600 transition-colors bg-stone-50 hover:bg-stone-100 p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 text-center">
                <motion.div layoutId="gift-icon" className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-5 border border-rose-200">
                  <Gift className="w-8 h-8 text-rose-500" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-stone-900 mb-3">Niespodzianka! 🎁</h3>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  Czy chcesz zagrać w prostą, szybką grę i zdobyć <strong>dodatkowy rabat</strong> na zakup e-booka?
                </p>
                
                <div className="flex flex-col space-y-3">
                  <button 
                    onClick={handlePlayGame}
                    className="w-full py-4 px-6 text-lg font-bold rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all duration-300 shadow-md hover:shadow-rose-500/30 transform hover:-translate-y-0.5"
                  >
                    Tak, chcę zagrać!
                  </button>
                  <button 
                    onClick={handleClosePopup}
                    className="w-full py-3 px-6 text-stone-500 font-medium rounded-full hover:bg-stone-50 transition-colors"
                  >
                    Nie, dziękuję
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mini Icon (when popup is closed) */}
      <AnimatePresence>
        {showMiniIcon && (
          <motion.div
            layoutId="gift-icon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOpenFromIcon}
            className="fixed top-6 right-6 z-50 w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-rose-200 shadow-xl text-rose-500 cursor-pointer group"
          >
            <Gift className="w-7 h-7 group-hover:text-rose-600 transition-colors" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 border-2 border-white"></span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
