export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-accent/5 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+Cjwvc3ZnPg==')] opacity-30"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-12 text-center">About</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              Alexander Hartwell is a distinguished American composer and pianist whose works have been performed by leading orchestras worldwide. His compositions seamlessly blend classical tradition with modern sensibilities, creating deeply moving musical experiences that resonate with contemporary audiences.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-white to-accent/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-accent/20">
                <h3 className="text-2xl font-display font-semibold gradient-text mb-4">Education</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><strong>Doctor of Musical Arts</strong> - The Juilliard School</li>
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><strong>Master of Music</strong> - New England Conservatory</li>
                  <li className="flex items-start"><span className="text-accent mr-3">•</span><strong>Bachelor of Music</strong> - Curtis Institute of Music</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white to-secondary/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-secondary/20">
                <h3 className="text-2xl font-display font-semibold gradient-text mb-4">Awards</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-secondary mr-3">•</span><strong>2023</strong> - Pulitzer Prize for Music</li>
                  <li className="flex items-start"><span className="text-secondary mr-3">•</span><strong>2022</strong> - Grammy Award for Best Classical Composition</li>
                  <li className="flex items-start"><span className="text-secondary mr-3">•</span><strong>2021</strong> - American Academy of Arts and Letters Award</li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg mb-6">
              His recent symphony "Echoes of Tomorrow" premiered with the New York Philharmonic to critical acclaim, with The New York Times describing it as "a masterful exploration of hope and resilience in our modern age." As a pianist, Hartwell has performed as soloist with major orchestras including the Boston Symphony Orchestra, Chicago Symphony Orchestra, and London Symphony Orchestra.
            </p>
            
            <p className="text-lg">
              Beyond performance and composition, Hartwell is deeply committed to music education. He currently serves as Artist-in-Residence at the Metropolitan Conservatory, where he mentors the next generation of classical musicians and composers. His pedagogical approach emphasizes both technical excellence and emotional authenticity in musical expression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
