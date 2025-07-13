import { Button } from "@/components/ui/button";
import { Clock, MapPin, Ticket } from "lucide-react";

export default function Performances() {
  const performances = [
    {
      date: "MAR 15",
      venue: "Carnegie Hall, New York",
      title: "Piano Concerto No. 3 in D minor",
      description: "Performing with the New York Philharmonic under Maestro Gustavo Dudamel",
      time: "8:00 PM"
    },
    {
      date: "APR 8",
      venue: "Boston Symphony Hall",
      title: "\"Echoes of Tomorrow\" - World Premiere",
      description: "Debut performance of new symphony with the Boston Symphony Orchestra",
      time: "7:30 PM"
    },
    {
      date: "MAY 22",
      venue: "Royal Albert Hall, London",
      title: "Chamber Music Recital",
      description: "Intimate evening of contemporary chamber works with the London Chamber Ensemble",
      time: "8:00 PM"
    }
  ];

  return (
    <section id="performances" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-12 text-center">Upcoming Performances</h2>
        
        <div className="max-w-4xl mx-auto">
          {performances.map((performance, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-sans font-medium mr-4">
                      {performance.date}
                    </div>
                    <div className="flex items-center text-gray-600 font-sans">
                      <MapPin size={16} className="mr-1" />
                      {performance.venue}
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-primary mb-2">
                    {performance.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {performance.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2" />
                    {performance.time}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8">
                  <Button className="bg-primary hover:bg-secondary">
                    <Ticket size={16} className="mr-2" />
                    Get Tickets
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
