import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      {/* Hero Section with Pale Blur */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/30 backdrop-blur-md border border-white/20 shadow-xl">
          <div className="p-8 lg:p-16 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-primary mb-6"
            >
              About Planet Mini
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              We're dedicated to providing the softest, safest, and most adorable baby wear for your little ones.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10">
          <div className="p-8 lg:p-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
            >
              Our Story
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Planet Mini was born from a simple desire: to create baby clothes that are as gentle 
                  on the planet as they are on your baby's delicate skin.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our journey began when our founders, new parents themselves, struggled to find 
                  baby wear that met their standards for comfort, safety, and sustainability.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we're proud to offer a curated collection of baby essentials that parents 
                  trust and babies love.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1541697960113-1ca22342bd6d?auto=format&fit=crop&q=80&w=600" 
                  alt="Baby clothes collection" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10">
          <div className="p-8 lg:p-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
            >
              Our Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌱",
                  title: "Eco-Friendly",
                  description: "We use sustainable materials and eco-friendly processes to protect our planet for future generations."
                },
                {
                  icon: "🤱",
                  title: "Baby-Safe",
                  description: "All our products are tested for safety and made with non-toxic, hypoallergenic materials."
                },
                {
                  icon: "💝",
                  title: "Parent-Approved",
                  description: "Designed by parents, for parents. Every product is tested and approved by real families."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
