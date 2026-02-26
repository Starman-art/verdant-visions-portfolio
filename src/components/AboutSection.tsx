import { motion } from "framer-motion";
import { Gamepad2, Code, Palette, Trophy } from "lucide-react";

const stats = [
  { icon: Gamepad2, value: "50+", label: "Games Shipped" },
  { icon: Code, value: "12", label: "Years Experience" },
  { icon: Palette, value: "200+", label: "Concepts Created" },
  { icon: Trophy, value: "8", label: "Awards Won" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 grid-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">
            // About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Designing <span className="text-primary">experiences</span>,
            <br />not just games.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a game designer with over a decade of experience crafting interactive worlds that tell compelling stories.
            From indie darlings to AAA titles, I bring a unique blend of technical expertise and artistic vision to every project.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            My approach combines systems thinking with player psychology, ensuring every mechanic serves the narrative
            and every moment feels intentional. I believe the best games are the ones that surprise you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-border bg-card p-6 text-center border-glow"
            >
              <stat.icon className="mx-auto mb-3 text-primary" size={28} />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
