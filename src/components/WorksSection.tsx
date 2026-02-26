import { motion } from "framer-motion";
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";

const projects = [
  {
    title: "Verdant Hollow",
    category: "RPG · Unreal Engine",
    description: "An open-world RPG set in a mystical enchanted forest with real-time ecology systems.",
    image: work1,
  },
  {
    title: "Neon Protocol",
    category: "Action · Unity",
    description: "A cyberpunk action game featuring procedural city generation and dynamic narrative.",
    image: work2,
  },
  {
    title: "Iron Dominion",
    category: "Strategy · Custom Engine",
    description: "A tactical strategy game with deep resource management and real-time combat.",
    image: work3,
  },
];

const WorksSection = () => {
  return (
    <section id="works" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">
            // Selected Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="overflow-hidden border border-border border-glow group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-3">
                  {project.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
