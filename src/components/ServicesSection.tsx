import { motion } from "framer-motion";
import { Lightbulb, Layers, Users, Cpu } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Game Concept Design",
    description: "From initial ideation to full concept documents — core mechanics, world-building, and narrative frameworks.",
  },
  {
    icon: Layers,
    title: "Level Design",
    description: "Crafting engaging level layouts that balance challenge, exploration, and storytelling through environment.",
  },
  {
    icon: Users,
    title: "UX & Player Research",
    description: "Data-driven design informed by playtesting, analytics, and deep understanding of player psychology.",
  },
  {
    icon: Cpu,
    title: "Systems Design",
    description: "Complex interconnected gameplay systems — economy, progression, combat, and procedural generation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 grid-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">
            // Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I <span className="text-primary">Do</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border border-border bg-card p-8 transition-all hover:border-primary/50 border-glow"
            >
              <service.icon className="text-primary mb-4 transition-transform group-hover:scale-110" size={32} />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
