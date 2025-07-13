import artistStatementImage from "@assets/Artist Statement JPG_1752415532976.jpg";
import artistPhotoImage from "@assets/artist-photo.jpg";

export default function ArtistStatement() {
  return (
    <section id="artist-statement" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8 text-center">
          Artist Statement
        </h2>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Artist Statement Text Image - Larger */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="md:scale-90 md:origin-top">
                <img
                  src={artistStatementImage}
                  alt="Artist Statement"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            
            {/* Artist Photo - Smaller */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={artistPhotoImage}
                  alt="Lewis Chung - Composer and Pianist"
                  className="w-full max-w-none scale-150 h-auto transform origin-center border-0"
                />
              </div>
              <p className="text-[10px] md:text-xs text-gray-500 mt-2 text-center">
                Photo credit: MR. GUMBATRON<sup>TM</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}