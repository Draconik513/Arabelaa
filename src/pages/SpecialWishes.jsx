import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
Bǎobèi,

Hari ini tuh literally super special, karena ini adalah hari dimana kamu lahir ke dunia. Aku nggak tau harus mulai dari mana, but I just wanna say thank you banget, thank you udah ada di dunia ini dan bikin hidup aku jadi jauh lebih berarti 🌹.
Aku tahu kadang hidup tuh nggak gampang, banyak hal yang bikin capek, sedih, atau bahkan pengin nyerah. But please remember, kamu nggak pernah sendirian. Aku di sini. Aku selalu pengen jadi orang yang kamu ingat pas lagi down, the one you can turn to anytime without worrying about being judged.
Bǎobèi, kamu tuh punya sesuatu yang beda. Cara kamu ngomong, ketawa, even cara kamu ngeliat dunia... itu semua punya makna buat aku. Aku suka banget cara kamu berjuang, how you hide your sadness but still manage to smile.
Aku cuma pengen kamu tau, aku believe banget sama kamu. Kamu kuat, kamu bisa, dan kamu pantas dapetin semua hal baik yang ada di dunia ini. Kalau suatu hari kamu ngerasa ragu atau down, just remember aku masih di sini, masih doa buat kamu, masih sayang kamu kayak waktu pertama kali aku jatuh hati. ✨
Don't ever stop being the Bǎobèi i know yang hangat, tulus, and always makes me feel enough just by being you❤
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Hide My Heart" : "See My Love"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Arabelaa Baobei 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Only U In My Heart, Honey
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
