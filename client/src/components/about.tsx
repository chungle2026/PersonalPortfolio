import personalPhoto from "@assets/Score by Door_V2_editedFOTOR_1752415188491.jpg";
import quotesImage from "@assets/quotes.jpg";

export default function About() {
  return (
    <section id="about" className="pt-8 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 text-center">About</h2>
          
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Biography Text - Left Side - Larger */}
            <div className="lg:col-span-3 lg:order-1 flex flex-col">
              <div className="md:scale-90 md:origin-top">
                <div className="bg-gray-100 rounded-xl shadow-lg p-6 md:p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-left md:text-justify">
                      Originally from Australia and now based in Hong Kong, composer and pianist Lewis Chung was a 2025 Composing Fellow in the studio of Gabriela Ortiz (three-time Grammy winner and composer-in-residence at Carnegie Hall), under an Artist Diploma program with Orchestra of the Americas.
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-left md:text-justify">
                      Notable collaborators include the Hong Kong Philharmonic Orchestra, Orquestra Sinfônica da Unicamp (Brazil), the Mivos Quartet and Juliette Kang (first associate concertmaster of the Philadelphia Orchestra). Recent engagements include a two-pianos museum concert in Kuwait, featuring Tony Yike Yang (Chopin Competition Laureate) and Faisal Al-Bahairi, hosted by the Kuwait National Council for Culture, Arts and Letters. This summer saw two premieres in the Shangyin Opera House (Shanghai): a solo baroque cello piece performed by Denise Fan in collaboration with Shanghai Conservatory and a CD recording for Soundbox Ventures featuring Sam Boutris (clarinet) and Baron Fenwick (piano).
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-left md:text-justify">
                      In recent years, his work has been premiered at venues including the Hong Cultural Centre, the Kimmel Centre Cultural Campus, Universität MDW (Vienna), Greenfield Hall (Manhattan School of Music), Shangyin Opera House (Shanghai), the Mütter Museum (Philadelphia), Trinity Cathedral (Cleveland), Macau Contemporary Art Center, Soho House and MGM Resort (Zhuhai). His music and comments on the connection between AI and human artistry have been featured in publications such as The Financial Times (UK), Madame Figaro, the South China Morning Post, Tatler and Sing Tao Daily.
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-left md:text-justify">
                      Other confirmed projects this year include a piano quartet performed at the Manhattan School of Music by Jenny Tsang and other students of Juilliard and MSM; works for piano and violin to be played around Cleveland by Joyce Yu and Minchae Kim; a solo piece to be premiered at SUNY Stony Brook by doctoral candidate Chloe Chung; and a visual arts-music collaboration with artist Sophie Cheung Hing Yee and cellist Ian Mok.
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-left md:text-justify">
                      Lewis has participated in many visual art collaborations and has also curated programs fostering dialogue between music and art for both art galleries and schools. In particular, he has collaborated with Henry Chu, a renowned digital artist, on immersive installations at Art Basel (Hong Kong), West Bund (Shanghai) and Hong Kong Design Centre. Their work features acoustic music and scores, whilst blending machine learning and innovative digital displays.
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-left md:text-justify">
                      Lewis has appeared in masterclasses with renowned composers, including Nico Muhly, Ellen Reid, Oscar Bianchi, Patricia Alessandrini, Sky Macklay and Detlev Müller-Siemens. He has attended festivals such as the São Paulo Contemporary Composers Festival, Sounds of Now Vienna and Soundbox Fellowship Program.
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-0 text-left md:text-justify">
                      A graduate of the University of Pennsylvania, he also completed graduate studies in both composition and piano at the Lamont School of Music (Denver) under department chairs Sean Friar and Stephanie Cheng. Beginning piano at age 5 in Australia, his prior teachers were faculty members of Sydney Conservatorium. Private teachers included Amy Sze (student of Nelita True), Joshua Tsai (student of Leon Fleisher) and Madeleine Lawrence (student of Neta Maughan).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Personal Photo - Right Side - Smaller */}
            <div className="lg:col-span-2 lg:order-2 flex flex-col">
              <img
                src={personalPhoto}
                alt="Lewis Chung"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
              <p className="text-[10px] md:text-xs text-gray-500 mt-2 text-center">
                Photo credit: MR. GUMBATRON<sup>TM</sup>
              </p>
            </div>
          </div>
          
          {/* Quotes Section */}
          <div className="mt-16 md:mt-12 mb-4 md:mb-6 max-w-4xl mx-auto flex justify-center">
            <div className="w-full md:w-3/4 bg-white md:p-3 rounded-xl md:shadow-2xl md:shadow-black/20 transform md:hover:scale-105 transition-transform duration-300">
              <img
                src={quotesImage}
                alt="Press quotes about Lewis Chung"
                className="rounded-lg md:rounded-xl shadow-lg md:shadow-none w-full h-auto object-cover scale-125 md:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
