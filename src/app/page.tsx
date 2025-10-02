export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="container mx-auto text-center relative">
          {/* Cloud Decoration */}
          <div className="absolute top-0 right-8 md:right-32 w-32 h-32 md:w-48 md:h-48 opacity-80">
            <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 100C40 85 52 73 67 73C72 58 85 47 101 47C122 47 139 64 139 85C154 85 166 97 166 112C166 127 154 139 139 139H50C45 139 40 134 40 129V100Z" fill="#FDB94E" stroke="#F9A825" strokeWidth="3"/>
              <circle cx="50" cy="85" r="20" fill="#FDB94E" stroke="#F9A825" strokeWidth="3"/>
              <circle cx="85" cy="75" r="25" fill="#FDB94E" stroke="#F9A825" strokeWidth="3"/>
              <circle cx="120" cy="80" r="22" fill="#FDB94E" stroke="#F9A825" strokeWidth="3"/>
              <circle cx="150" cy="95" r="18" fill="#FDB94E" stroke="#F9A825" strokeWidth="3"/>
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-lg">
            Caring Hearts, Happy Pets,<br />
            Strong Community
          </h1>
          
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
            Our mission at Dawg Team Apparel is to create a loving and joyful environment for pets and their owners, offering top-notch products and services that ensure every pet&apos;s well-being and every family&apos;s peace of mind and happiness.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105">
            <div className="text-5xl mb-4">✂️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Grooming</h3>
            <p className="text-gray-600">
              Professional grooming services to keep your pet looking their best
            </p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Pet Boarding</h3>
            <p className="text-gray-600">
              Safe and comfortable boarding facilities for your beloved pets
            </p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105">
            <div className="text-5xl mb-4">🛁</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Self-Serve Wash</h3>
            <p className="text-gray-600">
              DIY dog washing stations with all the supplies you need
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
