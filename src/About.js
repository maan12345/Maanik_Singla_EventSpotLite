function About(){
    return(
        <div className="flex items-center justify-center min-h-screen bg-indigo-950 text-white px-6 py-12">
            <div className="max-w-2xl p-8 bg-indigo-900 bg-opacity-80 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-indigo-300 mb-4">
                    About Us
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Welcome to <span className="text-indigo-400 font-semibold">EventSpot Lite</span>, your go-to platform for discovering the best events happening around you. We believe that exploring new experiences shouldn't be complicated. Our mission is to bring you closer to the events you care about, whether it's a live concert, a local festival, an art exhibition, or a hidden gem in your city.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    With EventSpot Lite, you’ll get up-to-date information on events happening nearby, making it easy to plan your day or night out. Our intuitive interface and quick search features are designed to help you find events that suit your interests in just a few clicks.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Our team is dedicated to keeping EventSpot Lite a reliable resource for all things event-related, helping you stay connected and in-the-know. <span className="text-indigo-400 font-semibold">Explore, experience, and enjoy</span> with EventSpot Lite.
                </p>
                <p className="text-center text-lg text-indigo-400 font-semibold mt-8">
                    Join us on this journey, and never miss out on the next big event around you!
                </p>
            </div>
        </div>
    )
}
export default About