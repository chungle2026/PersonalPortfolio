export default function Media() {
  const videoCategories = [
    {
      title: "Orchestra",
      videos: [
        { id: "a6LBXRoupi8", title: "Orchestral Performance 1" },
        { id: "gAlDxSzk2ak", title: "Orchestral Performance 2" }
      ]
    },
    {
      title: "Solo",
      videos: [
        { id: "SS_QBucQjK4", title: "Solo Performance 1" },
        { id: "7xUH7fYg-Xk", title: "Solo Performance 2" }
      ]
    },
    {
      title: "Chamber",
      videos: [
        { id: "Ep5D1TufQ_8", title: "Chamber Performance 1" },
        { id: "pq70TZV-a_0", title: "Chamber Performance 2" }
      ]
    },
    {
      title: "Cross-Genre",
      videos: [
        { id: "gAgXwdihxjY", title: "Cross-genre Performance 1" },
        { id: "aBjkX0EnFMw", title: "Cross-genre Performance 2" }
      ]
    }
  ];

  return (
    <section id="media" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 text-center">Selected Performances</h2>
        
        <div className="max-w-7xl mx-auto space-y-16">
          {videoCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-display font-semibold text-primary mb-2 text-left">{category.title}</h3>
              {category.title === "Cross-Genre" && (
                <p className="text-lg text-gray-600 mb-8 text-center">for example: film, visual art, Anime, machine-learning . Samples available upon request. Also have experience in art-pairing curatorial work.</p>
              )}
              {category.title !== "Cross-Genre" && <div className="mb-8"></div>}
              <div className="grid lg:grid-cols-2 gap-8">
                {category.videos.map((video, videoIndex) => (
                  <div key={videoIndex} className="bg-gray-50 rounded-xl p-6">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
