import { motion } from "framer-motion";

export default function KnowUs() {
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
              Know Us Better
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Discover the heart and soul behind Planet Mini - our mission, vision, and the people who make it all possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10">
          <div className="p-8 lg:p-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Mission</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Planet Mini, our mission is to create a world where every baby experiences the ultimate 
                comfort and care through thoughtfully designed, sustainable, and safe baby products. We 
                believe in nurturing not just babies, but also the planet they will inherit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10">
          <div className="p-8 lg:p-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Vision</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We envision becoming the most trusted name in baby care, setting new standards for 
                  quality, sustainability, and innovation in the industry.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our vision extends beyond just products - we aim to build a community of parents who 
                  share our values and commitment to creating a better world for the next generation.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600" 
                  alt="Our vision" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10">
          <div className="p-8 lg:p-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=300",
                  description: "A passionate parent with a vision for sustainable baby care."
                },
                {
                  name: "Michael Chen",
                  role: "Head of Design",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
                  description: "Creating beautiful, functional designs that babies love."
                },
                {
                  name: "Emily Rodriguez",
                  role: "Customer Experience",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300",
                  description: "Ensuring every family has the best experience with Planet Mini."
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/30"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-sm text-primary/70 font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10">
          <div className="p-8 lg:p-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🌍", title: "Sustainability", desc: "Eco-friendly products for a better tomorrow" },
                { icon: "🛡️", title: "Safety First", desc: "Rigorous testing for baby's wellbeing" },
                { icon: "💕", title: "Love & Care", desc: "Made with love for little ones" },
                { icon: "🌟", title: "Quality", desc: "Premium materials and craftsmanship" }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20"
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h3 className="font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
