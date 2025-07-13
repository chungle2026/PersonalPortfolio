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
    <section id="media" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">Media</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {videos.slice(0, 2).map((video, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-6">{video.title}</h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
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
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-display font-semibold text-primary mb-6">{videos[2].title}</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
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
