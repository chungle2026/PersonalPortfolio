export default function Media() {
  const videos = [
    {
      id: "iv-KGItij78",
      title: "Rachmaninoff Piano Concerto No. 2",
      description: "Performance with the Vienna Philharmonic"
    },
    {
      id: "3k8n6zWO8iE",
      title: "Echoes of Tomorrow - Symphony No. 4",
      description: "Excerpt from premiere performance"
    },
    {
      id: "JCmke2mvK-A",
      title: "Master Class on Musical Expression",
      description: "Finding Your Voice: Emotional Authenticity in Classical Performance"
    }
  ];

  return (
    <section id="media" className="py-20 bg-gradient-to-b from-accent/5 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl floating"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl floating" style={{animationDelay: '3s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-12 text-center">Media</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {videos.slice(0, 2).map((video, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-accent/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-accent/20">
                <h3 className="text-2xl font-display font-semibold gradient-text mb-6">{video.title}</h3>
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-4 shadow-inner">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-gray-700">{video.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-white to-secondary/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-secondary/20">
            <h3 className="text-2xl font-display font-semibold gradient-text mb-6">{videos[2].title}</h3>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-4 shadow-inner">
              <iframe
                src={`https://www.youtube.com/embed/${videos[2].id}`}
                title={videos[2].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-gray-700">{videos[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
