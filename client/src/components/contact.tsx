import speakingPhoto from "@assets/speaking-photo.jpg";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 text-center">Contact</h2>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center lg:justify-start">
              <img
                src={speakingPhoto}
                alt="Lewis Chung speaking at a performance venue"
                className="rounded-xl shadow-lg w-full max-w-md h-auto object-cover"
              />
            </div>

            <div className="w-full max-w-lg mx-auto lg:mx-0 space-y-6 text-gray-800 font-serif text-base leading-relaxed">
              <p>I would love to get in touch!</p>
              <p>
                Please email me using the format: firstname.surname [at] gmail.com
              </p>
              <p>
                Or message me on Instagram:{" "}
                <a
                  href="https://www.instagram.com/lewischungmusic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-secondary break-words"
                >
                  https://www.instagram.com/lewischungmusic/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
