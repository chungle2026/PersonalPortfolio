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
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-justify">
                      Originally from Australia and now based in Hong Kong, composer and pianist Lewis Chung was a 2025 Composing Fellow in the studio of Gabriela Ortiz (three-time Grammy winner and composer-in-residence at Carnegie Hall), under an Artist Diploma program with Orchestra of the Americas.
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-justify">
                      Notable collaborations include an orchestral composition inspired by Cubist art, performed by the Hong Kong Philharmonic Orchestra. Other premieres include an orchestral work in Brazil with the Orquestra Sinfônica da Unicamp, and a work with the globally acclaimed Mivos Quartet at the Universität MDW (Vienna). A solo violin piece was recorded by Juliette Kang, first associate concertmaster of the Philadelphia Orchestra.
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-justify">
                      Recent engagements include a two-piano museum concert in Kuwait, featuring Tony Yike Yang (Chopin Competition Laureate) and Faisal Al-Bahairi. The concert featured original anime-inspired music, hosted by the Kuwait National Council for Culture, Arts and Letters. He also collaborated with Henry Chu, a leading digital artist, on an installation at Art Basel (Hong Kong) and West Bund (Shanghai). The work was highlighted in seven media outlets, including The Financial Times (UK), for its innovative integration of music, art and machine learning.
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-justify">
                      Confirmed projects this season include a piano quartet performed at the Manhattan School of Music by Jenny Tsang and other students of Juilliard and MSM; a solo piece to be premiered at SUNY Stony Brook by doctoral candidate Chloe Chung; immersive music installations at Macau Contemporary Art Center and Hong Kong Design Center; a visual arts-music collaboration with artist Sophie Cheung Hing Yee and cellist Ian Mok; and works for piano and violin to be played around Cleveland by Joyce Yu and Minchae Kim.
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-4 text-justify">
                      Lewis has appeared in masterclasses with renowned composers, including Nico Muhly, Ellen Reid, Oscar Bianchi, Patricia Alessandrini, Sky Macklay and Detlev Müller-Siemens, and has attended festivals such as the São Paulo Contemporary Composers Festival. His music was featured by Seefood Room in Hong Kong, alongside an exhibition of global emerging visual artists.
                    </p>
                    
                    <p className="text-gray-800 font-serif leading-relaxed text-sm md:text-base mb-0 text-justify">
                      A graduate of the University of Pennsylvania, he also undertook graduate studies in both composition and piano at the Lamont School of Music (Denver) under department chairs Sean Friar and Stephanie Cheng. Beginning piano at age 5 in Australia, his prior teachers were faculty members of Sydney Conservatorium. Private teachers included Amy Sze (student of Nelita True), Joshua Tsai (student of Leon Fleisher) and Madeleine Lawrence (student of Neta Maughan).
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
